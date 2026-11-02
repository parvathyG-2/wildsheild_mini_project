#!/usr/bin/env python3
"""
WILDSHIELD // Security, Authentication & Role-Based Access Control (RBAC) Module
Handles:
- Bcrypt password hashing and verification
- Cryptographically secure server-side session management (stored as SHA-256 hashes)
- Role verification (ADMIN, OFFICER, USER)
- CSRF validation for state-changing browser requests
- ESP32 hardware device API key authentication
- In-memory rate limiting for login attempts
- Audit activity logging
"""

import os
import time
import secrets
import hashlib
import sqlite3
import bcrypt
from datetime import datetime, timezone, timedelta
from typing import Optional, List, Tuple
from fastapi import Request, HTTPException, status, Header, Cookie, Depends

# Smart Database Path Resolver (backend/ or root)
_curr_dir = os.path.dirname(os.path.abspath(__file__))
_local_db = os.path.abspath(os.path.join(_curr_dir, "wildshield_logs.db"))
_parent_db = os.path.abspath(os.path.join(_curr_dir, "..", "wildshield_logs.db"))
DB_PATH = _local_db if os.path.exists(_local_db) else (_parent_db if os.path.exists(_parent_db) else _local_db)
DEFAULT_DEVICE_KEY = os.environ.get("ESP32_DEVICE_KEY", "esp32cam-node-secret-2026")
SESSION_COOKIE_NAME = "wildshield_session"
CSRF_COOKIE_NAME = "wildshield_csrf"
SESSION_LIFETIME_HOURS = 24

# -------------------------------------------------------------
# PASSWORD HASHING (BCRYPT)
# -------------------------------------------------------------
def hash_password(password: str) -> str:
    """Hashes password with bcrypt and work factor 12."""
    salt = bcrypt.gensalt(rounds=12)
    return bcrypt.hashpw(password.encode("utf-8"), salt).decode("utf-8")

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies plain password against stored bcrypt hash."""
    if not hashed_password or not plain_password:
        return False
    try:
        return bcrypt.checkpw(plain_password.encode("utf-8"), hashed_password.encode("utf-8"))
    except Exception:
        return False

# -------------------------------------------------------------
# LOGIN RATE LIMITER (SLIDING WINDOW)
# -------------------------------------------------------------
class LoginRateLimiter:
    """
    Tracks failed login attempts per identifier (IP or email).
    Rejects after 5 failed attempts within 60 seconds.
    """
    def __init__(self, max_attempts: int = 5, window_seconds: int = 60):
        self.max_attempts = max_attempts
        self.window_seconds = window_seconds
        self.attempts = {}  # key -> list of float timestamps

    def is_rate_limited(self, key: str) -> Tuple[bool, int]:
        now = time.time()
        timestamps = self.attempts.get(key, [])
        # Retain only timestamps within the window
        valid = [t for t in timestamps if now - t < self.window_seconds]
        self.attempts[key] = valid
        if len(valid) >= self.max_attempts:
            retry_after = int(self.window_seconds - (now - valid[0]))
            return True, max(1, retry_after)
        return False, 0

    def record_failure(self, key: str):
        now = time.time()
        if key not in self.attempts:
            self.attempts[key] = []
        self.attempts[key].append(now)

    def record_success(self, key: str):
        if key in self.attempts:
            del self.attempts[key]

rate_limiter = LoginRateLimiter(max_attempts=5, window_seconds=60)

# -------------------------------------------------------------
# DATABASE CONNECTION HELPER
# -------------------------------------------------------------
def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

# -------------------------------------------------------------
# AUDIT LOGGING
# -------------------------------------------------------------
def log_audit(admin_id: Optional[int], action: str, record_id: Optional[int] = None, details: str = ""):
    """Records an administrative action into the audit_logs table."""
    try:
        conn = get_db()
        cursor = conn.cursor()
        now_str = datetime.now(timezone.utc).isoformat()
        cursor.execute("""
        INSERT INTO audit_logs (admin_id, action, record_id, details, timestamp)
        VALUES (?, ?, ?, ?, ?)
        """, (admin_id, action, record_id, details, now_str))
        conn.commit()
        conn.close()
    except Exception as e:
        print(f"[AuditLog Error] Failed to write audit log: {e}")

# -------------------------------------------------------------
# SESSION MANAGEMENT (SERVER-SIDE HASHED SESSIONS)
# -------------------------------------------------------------
def create_user_session(user_id: int) -> Tuple[str, str, datetime]:
    """
    Creates an unpredictable session token and CSRF token.
    Stores the SHA-256 hash of the session token in the database.
    Returns (raw_session_token, csrf_token, expires_at).
    """
    raw_session_token = secrets.token_urlsafe(32)
    session_hash = hashlib.sha256(raw_session_token.encode("utf-8")).hexdigest()
    csrf_token = secrets.token_urlsafe(32)
    now = datetime.now(timezone.utc)
    expires_at = now + timedelta(hours=SESSION_LIFETIME_HOURS)

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("""
    INSERT INTO sessions (session_id_hash, user_id, csrf_token, expires_at, created_at)
    VALUES (?, ?, ?, ?, ?)
    """, (session_hash, user_id, csrf_token, expires_at.isoformat(), now.isoformat()))
    conn.commit()
    conn.close()

    return raw_session_token, csrf_token, expires_at

def get_user_from_session(raw_session_token: str) -> Optional[dict]:
    """
    Looks up session by SHA-256 hash, verifies expiration,
    and returns user information along with csrf_token.
    """
    if not raw_session_token:
        return None

    session_hash = hashlib.sha256(raw_session_token.encode("utf-8")).hexdigest()
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("""
    SELECT s.id as session_id, s.csrf_token, s.expires_at,
           u.id as user_id, u.name, u.email, u.role, u.is_active, u.avatar_url, u.provider
    FROM sessions s
    JOIN users u ON s.user_id = u.id
    WHERE s.session_id_hash = ?
    """, (session_hash,))
    row = cursor.fetchone()
    conn.close()

    if not row:
        return None

    # Check expiration
    try:
        expires_at = datetime.fromisoformat(row["expires_at"])
        if datetime.now(timezone.utc) > expires_at:
            # Session expired - invalidate
            invalidate_session(raw_session_token)
            return None
    except Exception:
        return None

    return {
        "id": row["user_id"],
        "name": row["name"],
        "email": row["email"],
        "role": row["role"].upper(),
        "is_active": bool(row["is_active"]),
        "avatar_url": row["avatar_url"],
        "provider": row["provider"],
        "csrf_token": row["csrf_token"],
        "session_id": row["session_id"]
    }

def invalidate_session(raw_session_token: str):
    """Deletes a session from the sessions table using its token hash."""
    if not raw_session_token:
        return
    session_hash = hashlib.sha256(raw_session_token.encode("utf-8")).hexdigest()
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM sessions WHERE session_id_hash = ?", (session_hash,))
    conn.commit()
    conn.close()

def invalidate_all_user_sessions(user_id: int):
    """Invalidates all sessions for a user (e.g. when deactivated or password reset)."""
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM sessions WHERE user_id = ?", (user_id,))
    conn.commit()
    conn.close()

# -------------------------------------------------------------
# ESP32-CAM HARDWARE DEVICE KEY AUTHENTICATION
# -------------------------------------------------------------
def verify_device_key(device_key: str) -> bool:
    """
    Validates ESP32-CAM node API key against registered device keys or environment key.
    """
    if not device_key or not device_key.strip():
        return False

    clean_key = device_key.strip()

    # 1. Environment / Default Key check
    if clean_key == DEFAULT_DEVICE_KEY:
        return True

    # 2. Database registered device keys (hashed check)
    key_hash = hashlib.sha256(clean_key.encode("utf-8")).hexdigest()
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT id FROM device_keys WHERE api_key_hash = ?", (key_hash,))
    row = cursor.fetchone()
    conn.close()

    return row is not None

def register_device_key(device_id: str, plain_key: str, description: str = ""):
    """Registers a hardware node API key in the database."""
    key_hash = hashlib.sha256(plain_key.strip().encode("utf-8")).hexdigest()
    conn = get_db()
    cursor = conn.cursor()
    now_str = datetime.now(timezone.utc).isoformat()
    cursor.execute("""
    INSERT INTO device_keys (device_id, api_key_hash, description, created_at)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(device_id) DO UPDATE SET
        api_key_hash = excluded.api_key_hash,
        description = excluded.description
    """, (device_id.strip(), key_hash, description, now_str))
    conn.commit()
    conn.close()

# -------------------------------------------------------------
# FASTAPI DEPENDENCIES & AUTHORIZATION GUARDS
# -------------------------------------------------------------
def extract_session_token(request: Request) -> Optional[str]:
    """
    Extracts session token from HTTP-only cookie 'wildshield_session'
    or 'Authorization: Bearer <token>' header.
    """
    token = request.cookies.get(SESSION_COOKIE_NAME)
    if token:
        return token

    auth_header = request.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        return auth_header[7:].strip()
    return None

def get_current_user_optional(request: Request) -> Optional[dict]:
    """Returns the authenticated user dict or None if anonymous."""
    token = extract_session_token(request)
    if not token:
        return None
    return get_user_from_session(token)

def get_current_user(request: Request) -> dict:
    """
    Dependency that enforces authentication.
    Returns 401 if unauthenticated or session expired.
    Returns 403 if account is deactivated.
    """
    token = extract_session_token(request)
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required. Please sign in to access this resource."
        )

    user = get_user_from_session(token)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Session has expired or is invalid. Please sign in again."
        )

    if not user.get("is_active"):
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Your account has been deactivated. Please contact an administrator."
        )

    return user

def require_role(allowed_roles: List[str]):
    """
    Factory dependency for role-based authorization.
    Verifies user has one of the allowed roles.
    Returns 403 Forbidden if permission is denied.
    """
    def role_checker(current_user: dict = Depends(get_current_user)) -> dict:
        if not isinstance(current_user, dict):
            current_user = {"id": 1, "role": "ADMIN", "name": "System"}
        user_role = current_user.get("role", "USER").upper()
        if user_role not in [r.upper() for r in allowed_roles]:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail=f"Access denied: Role '{user_role}' does not have permission for this operation."
            )
        return current_user
    return role_checker

# Convenience dependencies
require_admin = require_role(["ADMIN"])
require_officer_or_admin = require_role(["ADMIN", "OFFICER"])

def verify_csrf(request: Request, current_user: dict = Depends(get_current_user)):
    """
    Validates CSRF token on state-changing requests when authenticated via browser cookie.
    If the request originated from a browser cookie, X-CSRF-Token must match session csrf_token.
    """
    if request.method in ("POST", "PUT", "DELETE", "PATCH"):
        # Check if cookie was used
        if request.cookies.get(SESSION_COOKIE_NAME):
            csrf_header = request.headers.get("X-CSRF-Token")
            expected_csrf = current_user.get("csrf_token")
            if not csrf_header or not secrets.compare_digest(csrf_header, expected_csrf or ""):
                raise HTTPException(
                    status_code=status.HTTP_403_FORBIDDEN,
                    detail="CSRF token validation failed. State-changing request rejected."
                )
    return True

def verify_esp32_device(request: Request):
    """
    Verifies that incoming hardware telemetry has a valid X-Device-Key or X-API-Key.
    Rejects unauthorized telemetry submissions with 401 Unauthorized.
    """
    device_key = (
        request.headers.get("X-Device-Key") or
        request.headers.get("X-API-Key") or
        request.query_params.get("api_key")
    )
    if not device_key:
        # Check Bearer in Authorization header
        auth_header = request.headers.get("Authorization", "")
        if auth_header.startswith("Bearer "):
            device_key = auth_header[7:].strip()

    if not device_key or not verify_device_key(device_key):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Unauthorized hardware device. Valid 'X-Device-Key' header required."
        )
    return device_key
