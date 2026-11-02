import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "wildshield_logs.db")

def run_migration():
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()

    # Check users columns
    c.execute("PRAGMA table_info(users)")
    cols = [col[1] for col in c.fetchall()]
    print("Existing users columns:", cols)

    if "google_id" not in cols:
        c.execute("ALTER TABLE users ADD COLUMN google_id TEXT")
    if "password_hash" not in cols:
        c.execute("ALTER TABLE users ADD COLUMN password_hash TEXT")
    if "is_active" not in cols:
        c.execute("ALTER TABLE users ADD COLUMN is_active INTEGER DEFAULT 1")
    conn.commit()

    # Ensure is_active is 1 for existing users
    c.execute("UPDATE users SET is_active = 1 WHERE is_active IS NULL")
    conn.commit()

    # Check telemetry_logs columns
    c.execute("PRAGMA table_info(telemetry_logs)")
    t_cols = [col[1] for col in c.fetchall()]
    print("Existing telemetry columns:", t_cols)
    if "incident_status" not in t_cols:
        c.execute("ALTER TABLE telemetry_logs ADD COLUMN incident_status TEXT DEFAULT 'ACTIVE'")
    conn.commit()

    # Create sessions table
    c.execute("""
    CREATE TABLE IF NOT EXISTS sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        session_id_hash TEXT UNIQUE NOT NULL,
        user_id INTEGER NOT NULL,
        csrf_token TEXT NOT NULL,
        expires_at TEXT NOT NULL,
        created_at TEXT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )
    """)

    # Create audit_logs table
    c.execute("""
    CREATE TABLE IF NOT EXISTS audit_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        admin_id INTEGER,
        action TEXT NOT NULL,
        record_id INTEGER,
        details TEXT,
        timestamp TEXT NOT NULL,
        FOREIGN KEY(admin_id) REFERENCES users(id)
    )
    """)

    # Create device_keys table
    c.execute("""
    CREATE TABLE IF NOT EXISTS device_keys (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        device_id TEXT UNIQUE NOT NULL,
        api_key_hash TEXT NOT NULL,
        description TEXT,
        created_at TEXT NOT NULL
    )
    """)
    conn.commit()

    print("✅ Database schema migration completed successfully!")
    conn.close()

if __name__ == "__main__":
    run_migration()

