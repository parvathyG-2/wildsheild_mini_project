#!/usr/bin/env python3
"""
WILDSHIELD // Secure Administrator Provisioning CLI Tool
Creates or updates the primary Chief Administrator account in SQLite.
Enforces bcrypt password hashing and verifies security policies.

Usage:
  python setup_admin.py --email admin@wildshield.gov.in --name "Chief Administrator" --password "Admin@WildShield2026!"
  python setup_admin.py (interactive mode)
"""

import sys
import os
import argparse
import getpass
from datetime import datetime, timezone

# Windows UTF-8 console output
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from auth_service import get_db, hash_password, log_audit

def setup_admin(email: str, name: str, password: str) -> bool:
    email = email.strip().lower()
    name = name.strip()

    if len(password) < 8:
        print("[ERROR] Password must be at least 8 characters long.")
        return False

    hashed = hash_password(password)
    now_str = datetime.now(timezone.utc).isoformat()
    avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"

    conn = get_db()
    cursor = conn.cursor()

    # Check if user exists
    cursor.execute("SELECT id, role FROM users WHERE email = ?", (email,))
    existing = cursor.fetchone()

    if existing:
        user_id = existing["id"]
        cursor.execute("""
        UPDATE users SET 
            name = ?,
            password_hash = ?,
            role = 'ADMIN',
            is_active = 1,
            avatar_url = COALESCE(avatar_url, ?)
        WHERE id = ?
        """, (name, hashed, avatar, user_id))
        action = "ADMIN_ACCOUNT_PROMOTED"
    else:
        cursor.execute("""
        INSERT INTO users (email, name, role, provider, avatar_url, password_hash, is_active, created_at)
        VALUES (?, ?, 'ADMIN', 'password', ?, ?, 1, ?)
        """, (email, name, avatar, hashed, now_str))
        user_id = cursor.lastrowid
        action = "ADMIN_ACCOUNT_INITIALIZED"

    conn.commit()
    conn.close()

    log_audit(admin_id=user_id, action=action, record_id=user_id, details=f"Admin account configured for {email}")

    print("=" * 68)
    print("  [SUCCESS] Chief Administrator Account Provisioned")
    print("=" * 68)
    print(f"  User ID : #{user_id}")
    print(f"  Name    : {name}")
    print(f"  Email   : {email}")
    print(f"  Role    : ADMIN (Full Telemetry & User CRUD Privileges)")
    print(f"  Status  : Active (1)")
    print("=" * 68)
    return True

def main():
    parser = argparse.ArgumentParser(description="WILDSHIELD Chief Administrator Provisioning Tool")
    parser.add_argument("--email", default="", help="Administrator email address")
    parser.add_argument("--name", default="", help="Administrator full name")
    parser.add_argument("--password", default="", help="Administrator password")
    args = parser.parse_args()

    email = args.email
    name = args.name
    password = args.password

    if not email or not password:
        print("=" * 68)
        print("  WILDSHIELD // SECURE ADMINISTRATOR SETUP WIZARD")
        print("=" * 68)
        if not email:
            email = input("Enter Administrator Email [default: admin@wildshield.gov.in]: ").strip()
            if not email:
                email = "admin@wildshield.gov.in"
        if not name:
            name = input("Enter Administrator Name [default: Chief Wildlife Administrator]: ").strip()
            if not name:
                name = "Chief Wildlife Administrator"
        if not password:
            while True:
                password = getpass.getpass("Enter Administrator Password (min 8 chars): ").strip()
                if len(password) >= 8:
                    break
                print("[!] Password must be at least 8 characters.")

    success = setup_admin(email, name, password)
    if not success:
        sys.exit(1)

if __name__ == "__main__":
    main()

