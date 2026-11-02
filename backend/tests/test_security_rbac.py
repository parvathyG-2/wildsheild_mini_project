import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
#!/usr/bin/env python3
"""
WILDSHIELD // Comprehensive Security, RBAC & Session Management Test Suite
Verifies all 8 required test scenarios from the specification:
1. Normal user attempts to access Admin User Management -> 403 Forbidden
2. Normal user attempts to delete a wildlife record -> 403 Forbidden
3. Officer attempts to access Admin User Management -> 403 Forbidden
4. Unauthenticated visitor attempts to access protected APIs -> 401 Unauthorized
5. Admin successfully creates, edits and deletes wildlife records -> 201 Created, 200 OK, 200 OK
6. Expired session attempts to access protected APIs -> 401 Unauthorized
7. Deactivated user attempts to log in / access APIs -> 403 Forbidden
8. Unauthorized device attempts to submit telemetry -> 401 Unauthorized; Authorized device -> 201 Created
"""

import sys
import os
import hashlib
from datetime import datetime, timezone, timedelta
from starlette.requests import Request
from starlette.responses import Response
from fastapi import HTTPException

# Windows console UTF-8 reconfigure
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

from main import (
    app,
    init_db,
    auth_register,
    auth_login,
    auth_google,
    auth_logout,
    get_public_route_status,
    get_forensic_telemetry,
    admin_create_telemetry,
    admin_update_telemetry,
    admin_delete_telemetry,
    update_incident_status,
    admin_get_users,
    admin_update_user_status,
    admin_get_audit_logs,
    ingest_telemetry,
    RegisterRequest,
    LoginRequest,
    GoogleAuthRequest,
    TelemetryRecordCreate,
    TelemetryRecordUpdate,
    IncidentStatusUpdate,
    IngestPayload,
    TelemetryCoords,
    DetectionItem
)

from auth_service import (
    DB_PATH,
    get_db,
    hash_password,
    create_user_session,
    get_current_user,
    require_admin,
    require_officer_or_admin,
    DEFAULT_DEVICE_KEY,
    SESSION_COOKIE_NAME,
    CSRF_COOKIE_NAME
)

def make_request(method="GET", path="/", cookies=None, headers=None, client_ip="127.0.0.1"):
    cookie_str = "; ".join([f"{k}={v}" for k, v in (cookies or {}).items()])
    h_list = [(k.lower().encode(), v.encode()) for k, v in (headers or {}).items()]
    if cookie_str:
        h_list.append((b"cookie", cookie_str.encode()))
    scope = {
        "type": "http",
        "method": method.upper(),
        "path": path,
        "raw_path": path.encode(),
        "query_string": b"",
        "headers": h_list,
        "client": (client_ip, 12345),
        "server": ("127.0.0.1", 8000),
    }
    return Request(scope)

def setup_test_users():
    """Seeds test users with deterministic credentials for testing."""
    conn = get_db()
    c = conn.cursor()
    now_str = datetime.now(timezone.utc).isoformat()
    avatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=128&q=80"

    # 1. Admin user
    c.execute("SELECT id FROM users WHERE email = 'test.admin@wildshield.gov.in'")
    row = c.fetchone()
    if not row:
        c.execute("""
        INSERT INTO users (email, name, role, provider, avatar_url, password_hash, is_active, created_at)
        VALUES ('test.admin@wildshield.gov.in', 'Test Admin', 'ADMIN', 'password', ?, ?, 1, ?)
        """, (avatar, hash_password("AdminPass123!"), now_str))
        admin_id = c.lastrowid
    else:
        admin_id = row["id"]

    # 2. Officer user
    c.execute("SELECT id FROM users WHERE email = 'test.officer@wildshield.gov.in'")
    row = c.fetchone()
    if not row:
        c.execute("""
        INSERT INTO users (email, name, role, provider, avatar_url, password_hash, is_active, created_at)
        VALUES ('test.officer@wildshield.gov.in', 'Test Officer', 'OFFICER', 'password', ?, ?, 1, ?)
        """, (avatar, hash_password("OfficerPass123!"), now_str))
        officer_id = c.lastrowid
    else:
        officer_id = row["id"]

    # 3. Normal user (Traveler)
    c.execute("SELECT id FROM users WHERE email = 'test.traveler@gmail.com'")
    row = c.fetchone()
    if not row:
        c.execute("""
        INSERT INTO users (email, name, role, provider, avatar_url, password_hash, is_active, created_at)
        VALUES ('test.traveler@gmail.com', 'Test Traveler', 'USER', 'password', ?, ?, 1, ?)
        """, (avatar, hash_password("TravelerPass123!"), now_str))
        traveler_id = c.lastrowid
    else:
        traveler_id = row["id"]

    # 4. Deactivated user
    c.execute("SELECT id FROM users WHERE email = 'test.deactivated@gmail.com'")
    row = c.fetchone()
    if not row:
        c.execute("""
        INSERT INTO users (email, name, role, provider, avatar_url, password_hash, is_active, created_at)
        VALUES ('test.deactivated@gmail.com', 'Suspended User', 'USER', 'password', ?, ?, 0, ?)
        """, (avatar, hash_password("SuspendedPass123!"), now_str))
        deact_id = c.lastrowid
    else:
        deact_id = row["id"]
        c.execute("UPDATE users SET is_active = 0 WHERE id = ?", (deact_id,))

    conn.commit()
    conn.close()

    return {
        "admin_id": admin_id,
        "officer_id": officer_id,
        "traveler_id": traveler_id,
        "deact_id": deact_id
    }

def run_all_tests():
    print("=" * 72)
    print("  WILDSHIELD // AUTOMATED SECURITY, RBAC & SESSION MANAGEMENT TEST SUITE")
    print("=" * 72)

    init_db()
    user_ids = setup_test_users()

    # Create active sessions
    admin_session, admin_csrf, _ = create_user_session(user_ids["admin_id"])
    officer_session, officer_csrf, _ = create_user_session(user_ids["officer_id"])
    traveler_session, traveler_csrf, _ = create_user_session(user_ids["traveler_id"])

    admin_user = get_current_user(make_request(cookies={SESSION_COOKIE_NAME: admin_session}))
    officer_user = get_current_user(make_request(cookies={SESSION_COOKIE_NAME: officer_session}))
    traveler_user = get_current_user(make_request(cookies={SESSION_COOKIE_NAME: traveler_session}))

    # -----------------------------------------------------------------
    # TEST CASE 1: Normal user attempts to access Admin User Management -> 403
    # -----------------------------------------------------------------
    print("\n[TEST 1/8] Normal user attempts to access Admin User Management...")
    try:
        require_admin(traveler_user)
        assert False, "Security violation: require_admin did not raise 403 for USER role!"
    except HTTPException as e:
        print(f"  Guarded by RBAC: HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403

    try:
        admin_get_users(current_user=traveler_user)
        assert False, "Security violation: admin_get_users executed for normal user!"
    except HTTPException as e:
        print(f"  Endpoint Guard : HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403
    print("  [OK] TEST 1 PASSED: Normal user rejected with 403 Forbidden from Admin User Management.")

    # -----------------------------------------------------------------
    # TEST CASE 2: Normal user attempts to delete a wildlife record -> 403
    # -----------------------------------------------------------------
    print("\n[TEST 2/8] Normal user attempts to delete a wildlife record...")
    try:
        admin_delete_telemetry(log_id=1, current_user=traveler_user)
        assert False, "Security violation: admin_delete_telemetry executed for normal user!"
    except HTTPException as e:
        print(f"  Guarded by RBAC: HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403
    print("  [OK] TEST 2 PASSED: Normal user rejected with 403 Forbidden from Deleting wildlife telemetry.")

    # -----------------------------------------------------------------
    # TEST CASE 3: Officer attempts to access Admin User Management & Delete -> 403
    # -----------------------------------------------------------------
    print("\n[TEST 3/8] Officer attempts to access Admin User Management & Delete Record...")
    
    # 3A: Officer tries to access admin users
    try:
        admin_get_users(current_user=officer_user)
        assert False, "Security violation: admin_get_users executed for officer!"
    except HTTPException as e:
        print(f"  3A (Admin Users API): HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403

    # 3B: Officer tries to delete wildlife record
    try:
        admin_delete_telemetry(log_id=1, current_user=officer_user)
        assert False, "Security violation: admin_delete_telemetry executed for officer!"
    except HTTPException as e:
        print(f"  3B (Delete Record)  : HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403

    # 3C: But Officer CAN access unredacted forensic telemetry
    logs = get_forensic_telemetry(current_user=officer_user)
    assert len(logs) > 0
    target_id = logs[0]["id"]
    assert "latitude" in logs[0] and "longitude" in logs[0]
    print(f"  3C (Forensic GPS)   : HTTP 200 - Retrieved {len(logs)} unredacted logs with exact GPS coordinates")

    # 3D: Officer CAN update incident investigation status
    status_res = update_incident_status(
        log_id=target_id,
        payload=IncidentStatusUpdate(incident_status="INVESTIGATING", hazard_level="CRITICAL_BLOCK"),
        current_user=officer_user
    )
    assert status_res["status"] == "updated"
    print(f"  3D (Incident Status): HTTP 200 - Status updated to '{status_res['incident_status']}'")
    print("  [OK] TEST 3 PASSED: Officer restricted from Admin areas, permitted for forensic telemetry and incident updates.")

    # -----------------------------------------------------------------
    # TEST CASE 4: Unauthenticated visitor attempts to access protected APIs -> 401
    # -----------------------------------------------------------------
    print("\n[TEST 4/8] Unauthenticated visitor attempts to access protected APIs...")
    unauth_req = make_request()
    
    try:
        get_current_user(unauth_req)
        assert False, "Security violation: get_current_user succeeded for anonymous request!"
    except HTTPException as e:
        print(f"  4A (Unauthenticated Access): HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 401

    # 4B: Anonymous CAN access sanitized public alerts (strict anti-poaching redaction)
    public_alerts = get_public_route_status()
    assert len(public_alerts) > 0
    sample = public_alerts[0]
    assert "latitude" not in sample and "longitude" not in sample
    print(f"  4B (Public Alerts Sanitized): HTTP 200 - {len(public_alerts)} sanitized records (exact GPS quarantined)")
    print("  [OK] TEST 4 PASSED: Unauthenticated visitors blocked with 401 from protected APIs; public alerts accessible.")

    # -----------------------------------------------------------------
    # TEST CASE 5: Admin successfully creates, edits and deletes wildlife records -> 201, 200, 200
    # -----------------------------------------------------------------
    print("\n[TEST 5/8] Admin creates, edits, and deletes wildlife telemetry records...")

    # 5A: CREATE
    new_record = TelemetryRecordCreate(
        species="leopard",
        confidence=0.96,
        latitude=11.6710,
        longitude=76.6285,
        speed_kmh=31.0,
        road_sector="KM 44-48 (Forest Gap Curve)",
        hazard_level="CRITICAL_BLOCK",
        node_id="ADMIN_TERMINAL_01"
    )
    c_res = admin_create_telemetry(new_record, current_user=admin_user)
    print(f"  5A (Create Record): HTTP 201 Created - Record #{c_res.get('id')} ({new_record.species.upper()})")
    assert c_res.get("status") == "created"
    new_id = c_res["id"]

    # 5B: EDIT
    u_res = admin_update_telemetry(
        new_id,
        TelemetryRecordUpdate(species="tiger", confidence=0.99, hazard_level="CRITICAL_BLOCK"),
        current_user=admin_user
    )
    print(f"  5B (Edit Record)  : HTTP 200 OK - Record #{new_id} modified successfully")
    assert u_res.get("status") == "updated"

    # 5C: DELETE
    d_res = admin_delete_telemetry(new_id, current_user=admin_user)
    print(f"  5C (Delete Record): HTTP 200 OK - Record #{new_id} deleted successfully")
    assert d_res.get("status") == "deleted"

    # 5D: VERIFY AUDIT TRAIL
    audit_logs = admin_get_audit_logs(current_user=admin_user)
    actions = [a["action"] for a in audit_logs]
    assert "WILDLIFE_CREATE" in actions
    assert "WILDLIFE_UPDATE" in actions
    assert "WILDLIFE_DELETE" in actions
    print(f"  5D (Audit Trail)  : Confirmed {len(audit_logs)} activity entries (WILDLIFE_CREATE, UPDATE, DELETE logged)")
    print("  [OK] TEST 5 PASSED: Admin full CRUD executed successfully and recorded in audit logs.")

    # -----------------------------------------------------------------
    # TEST CASE 6: Expired session attempts to access protected APIs -> 401
    # -----------------------------------------------------------------
    print("\n[TEST 6/8] Expired session attempts to access protected APIs...")
    raw_expired_token, _, _ = create_user_session(user_ids["admin_id"])
    
    # Backdate session expiration in DB
    h = hashlib.sha256(raw_expired_token.encode("utf-8")).hexdigest()
    two_hours_ago = (datetime.now(timezone.utc) - timedelta(hours=2)).isoformat()
    conn = get_db()
    c = conn.cursor()
    c.execute("UPDATE sessions SET expires_at = ? WHERE session_id_hash = ?", (two_hours_ago, h))
    conn.commit()
    conn.close()

    expired_req = make_request(cookies={SESSION_COOKIE_NAME: raw_expired_token})
    try:
        get_current_user(expired_req)
        assert False, "Security violation: expired session was accepted!"
    except HTTPException as e:
        print(f"  Expired Session Check: HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 401
    print("  [OK] TEST 6 PASSED: Expired session rejected with HTTP 401 Unauthorized.")

    # -----------------------------------------------------------------
    # TEST CASE 7: Deactivated user attempts to log in / access APIs -> 403
    # -----------------------------------------------------------------
    print("\n[TEST 7/8] Deactivated user attempts to log in / access APIs...")
    login_req = LoginRequest(email="test.deactivated@gmail.com", password="SuspendedPass123!")
    dummy_resp = Response()
    dummy_req = make_request()

    try:
        auth_login(login_req, dummy_req, dummy_resp)
        assert False, "Security violation: deactivated user logged in successfully!"
    except HTTPException as e:
        print(f"  7A (Login Blocked) : HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403

    # Attempt access using pre-existing session token
    deact_session, _, _ = create_user_session(user_ids["deact_id"])
    deact_req = make_request(cookies={SESSION_COOKIE_NAME: deact_session})
    try:
        get_current_user(deact_req)
        assert False, "Security violation: deactivated session token was accepted!"
    except HTTPException as e:
        print(f"  7B (Session Blocked): HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 403
    print("  [OK] TEST 7 PASSED: Deactivated account rejected with HTTP 403 Forbidden.")

    # -----------------------------------------------------------------
    # TEST CASE 8: Hardware Device Telemetry Security (ESP32-CAM)
    # -----------------------------------------------------------------
    print("\n[TEST 8/8] Unauthorized device attempts to submit telemetry...")
    fomo_payload = IngestPayload(
        node_id="VEHICLE_PATROL_01",
        model_type="FOMO",
        telemetry=TelemetryCoords(
            latitude=11.6645,
            longitude=76.6210,
            road_sector="KM 42-46 (Elephant Corridor)",
            speed_kmh=28.5
        ),
        detections=[
            DetectionItem(species="elephant", confidence=0.95, x=138, y=105, w=0, h=0)
        ]
    )

    # 8A: Submission WITHOUT API Key
    req_no_key = make_request(method="POST", path="/api/v1/telemetry/ingest")
    try:
        ingest_telemetry(fomo_payload, req_no_key)
        assert False, "Security violation: telemetry ingested without device key!"
    except HTTPException as e:
        print(f"  8A (Missing Key) : HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 401

    # 8B: Submission WITH INVALID API Key
    req_bad_key = make_request(method="POST", path="/api/v1/telemetry/ingest", headers={"X-Device-Key": "invalid_spoofed_key_999"})
    try:
        ingest_telemetry(fomo_payload, req_bad_key)
        assert False, "Security violation: telemetry ingested with spoofed device key!"
    except HTTPException as e:
        print(f"  8B (Invalid Key) : HTTP {e.status_code} - {e.detail}")
        assert e.status_code == 401

    # 8C: Submission WITH VALID Hardware API Key (esp32cam-node-secret-2026)
    req_good_key = make_request(method="POST", path="/api/v1/telemetry/ingest", headers={"X-Device-Key": DEFAULT_DEVICE_KEY})
    res_ingest = ingest_telemetry(fomo_payload, req_good_key)
    print(f"  8C (Valid Device): HTTP 201 Created - {res_ingest.get('message')}")
    assert res_ingest.get("status") == "success"
    print("  [OK] TEST 8 PASSED: Unauthorized device telemetry rejected with 401; Authorized hardware accepted with 201.")

    print("\n" + "=" * 72)
    print("  ✨ ALL 8 SECURITY, RBAC & SESSION MANAGEMENT TEST CASES PASSED (100%)")
    print("=" * 72)

if __name__ == "__main__":
    run_all_tests()
