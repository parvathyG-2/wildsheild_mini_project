# 🌿 WILDSHIELD // Forest Highway Wildlife Telemetry & Road Safety System

A clean, high-contrast, self-contained web platform and lightweight FastAPI companion backend designed for local Wi-Fi / Mobile Hotspot edge telemetry ingestion from vehicle-mounted microcontrollers (ESP32-CAM running TinyML FOMO centroid localization or YOLO bounding boxes).

---

## 🏗️ Hardware-to-Web Hotspot Architecture

```
+-------------------------------------------------------------+
|               Wi-Fi AP / Mobile Hotspot                    |
|             (SSID: WildShield_Hotspot)                      |
+-------------------------------------------------------------+
        │                                           │
        ▼ (Local HTTP POST)                         ▼ (Dashboard Browser)
+-----------------------+                   +-----------------------+
| ESP32-CAM Prototype   |                   | Traveler / Officer    |
| (Edge FOMO / YOLO)    |                   | Smartphone / Laptop   |
| Node: VEHICLE_PROTO_01|                   | http://192.168.x.x:8000|
+-----------------------+                   +-----------------------+
        │                                           │
        └─────────────────►[ FastAPI ]◄─────────────┘
                           (0.0.0.0:8000)
                                 │
                          [ SQLite DB ]
                       (wildshield_logs.db)
```

1. **Local Network Hotspot:** Laptop/host and vehicle ESP32-CAM connect to the same Wi-Fi hotspot (`WildShield_Hotspot`).
2. **Server Binding:** FastAPI runs on `0.0.0.0:8000` (e.g. `http://192.168.1.4:8000`), resolving local subnet addresses.
3. **Data Ingestion:** Vehicle prototype posts JSON detections (`POST /api/v1/telemetry/ingest`).
4. **Local Persistence:** Data is recorded to `wildshield_logs.db` and rendered live on `index.html`.

---

## 📂 Frontend & Backend Project Architecture

The application is cleanly organized into separated rontend/ and ackend/ layers for enterprise modularity, clean maintenance, and easy deployment:

`
├── frontend/
│   ├── index.html            # Main UI (HTML markup with modular links)
│   ├── css/
│   │   └── style.css         # High-contrast light forest stylesheet (zero blue)
│   └── js/
│       └── app.js            # Client-side telemetry, map, voice & auth logic
│
├── backend/
│   ├── main.py               # FastAPI server application & REST endpoints
│   ├── auth_service.py       # RBAC, bcrypt password hashing, session tokens, audit logs
│   ├── setup_admin.py        # Administrator account provisioning CLI
│   ├── migrate_db.py         # Database schema migrations
│   ├── wildshield_logs.db    # SQLite database (users, sessions, telemetry & audit logs)
│   └── tests/
│       ├── test_security_rbac.py   # 8-scenario automated security test suite
│       ├── test_node_simulator.py  # ESP32-CAM telemetry broadcast simulator
│       └── demo_verification.py    # System integration verification script
│
├── run_dashboard.bat         # 1-Click launcher running backend/main.py & opening browser
├── run_full_system_demo.bat  # 1-Click full demo (server + simulator)
├── open_browser_offline.bat  # 1-Click offline launcher opening frontend/index.html
└── README.md                 # Complete system documentation
`

---

## ✨ Features Implemented

### 1. High-Contrast Light Forest Theme (Sunlight Legible, Zero Blue)
- **Crisp Daylight Palette:** Pure white card surfaces (`#ffffff`), pale mist background (`#f5f8f5`), deep forest slate text (`#112217`, 14:1+ contrast ratio), vivid emerald accents (`#059669`, `#047857`), warning amber (`#d97706`), and critical red (`#dc2626`).
- **Strictly Zero Blue:** Guaranteed no cyan or blue hues for maximum contrast and natural forest highway styling.

### 2. Hands-Free Voice Supporter & Emergency Call System
- **Real-Time Voice Assistant:** Powered by the Web Speech API with animated audio wave equalizer bars and live speech transcription.
- **Voice Emergency Call Trigger:**
  - When the traveler says: `"Emergency Call"`, `"Emergency"`, `"Call 1926"`, `"Help"`, `"SOS"`, or in Malayalam (`"അടിയന്തിര കോൾ"`, `"സഹായം"`), or Hindi (`"आपातकालीन कॉल"`, `"मदद"`):
  - 1. Emits a synthesised siren alert chime.
  - 2. Speaks an audible voice confirmation via Text-to-Speech: *"Emergency detected! Initiating emergency call to State Forest Helpline 1926 now."*
  - 3. Pops up an Emergency Dialog with an animated 3-second countdown.
  - 4. Automatically initiates the telephone dialer (`tel:1926`).
- **Interactive Test Button:** Includes a `🚨 Test "Emergency Call" Trigger` button so users can test the emergency sequence on any browser.
- **Other Voice Commands:** Say `"Open Map"`, `"Route Status"`, `"Malayalam"`, `"Hindi"`, or `"English"`.

### 3. Highway Corridor Route Safety & Embedded Radar Map
- **In-Page Highway Radar Map:** A visual SVG route canvas directly embedded inside the card depicting the actual highway corridor, road curvature, distance KM markers, checkposts, and animal hazard hotspots with pulsing radar waves. Works 100% offline and inside embedded webviews without popups!
- **Exact GPS Coordinates:** Uses verified geographic points for Wayanad NH-766 (`11.6660,76.6340` to `11.6645,76.2570`), Chinnar SH-17 (`10.2800,77.1580` to `10.5840,77.2470`), and Munnar Gap Road NH-85 (`10.0889,77.0595` to `9.9710,77.1850`) so Google Maps directions never fail.
- **Dual Action Controls:**
  - 🚗 **"Open Route in Google Maps (Driving Directions)"**: Automatically copies the route URL to clipboard and opens Google Maps in a new tab.
  - 📍 **"View Animal Sighting GPS Spot"**: Pins the exact animal detection location on Google Maps.
- **Auto-Clipboard & Sandbox Toast:** Clicking either button automatically copies the full Google Maps navigation URL to your clipboard and displays an instant copy-success toast notification.

### 4. Tri-Lingual Client-Side Localization
- Instant switching between **English (EN)**, **മലയാളം (ML)**, and **हिन्दी (HI)**.
- Dynamically translates all headers, voice supporter labels, corridor route labels, hazard advisories, hotspot descriptions, and emergency contacts.

### 5. Traveler Portal & Hotspots (Public Default)
- **Wi-Fi Hotspot Status Indicator:** Live network pill displaying connection state, SSID, host subnet, and ping.
- **Interactive Route Safety:** Live dynamic status banners (Blocked / Advisory / Clear) and safe night driving speeds.
- **Corridor Crossing Zones:** Elephant Corridor (KM 42–46), River Valley Bend (KM 38–41), Buffer Crossing Zone (KM 50–54).
- **24/7 Forest Emergency Helplines:** One-tap dial links for `1926` Toll-Free, Wildlife Rapid Response Squad (`+91 94479 79000`), and National Highway Emergency (`112`).

### 6. Stealth Officer Terminal & Admin Control Console
- **Discreet Access:** Accessible via top header `🔑 Sign In / Admin` or footer `🔒 Officer Access`.
- **Passcode Protection:** Default passcodes: `admin2026` (Chief Admin) or `ranger2026` (Patrol Officer).
- **Forensic Telemetry Console:** Full unredacted records with **exact GPS coordinates (Latitude, Longitude)**, vehicle speeds, and model engines (FOMO / YOLO).
- **In-App Ingest Simulator:** "⚡ Simulate Vehicle Ingest" button allows testing and UI demonstration even when physical hardware is powered off.

### 7. Google Account Sign-In & Administrator Full Data CRUD
- **Sign In with Google:** Official Google OAuth integration with single-sign-on support (`accounts.google.com/gsi/client`), official 4-color Google vector branding, and instant test simulator.
- **Chief Administrator Role:** Logging in as Admin grants full privileges across all telemetry records.
- **Create (Add Record):** Click `➕ Add Sighting Record` to log new wildlife detections (Species, Hazard Level, Corridor Sector, GPS Lat/Lng, Confidence, Speed, Node ID).
- **Update (Modify Record):** Click `✏️ Edit` on any telemetry row to edit species, hazard status, or GPS coordinates in real-time.
- **Delete Record:** Click `🗑️ Delete` on any telemetry row to remove obsolete sightings and immediately recalculate corridor road safety.
- **Session Persistence:** Persistent login via `localStorage` with user avatar, name, and `ADMIN` badge in header.

---

## 🚀 How to Run the Dashboard

### 🌟 Option 1: 1-Click Complete System Demo (Recommended)
Double-click **`run_full_system_demo.bat`**. This single file will automatically:
1. Start the FastAPI ingestion server on `http://127.0.0.1:8000` in Window 1.
2. Start the vehicle telemetry simulator broadcasting detections in Window 2.
3. Launch your web browser to the dashboard automatically!

---

### Option 2: Live Server Mode
1. Double-click **`run_dashboard.bat`** (or run `python main.py` in PowerShell/CMD).
2. Keep the command prompt window **OPEN** while using the system.
3. Your web browser will automatically open to:
   - Host machine: **`http://127.0.0.1:8000`**
   - Smartphones / vehicle ESP32-CAM nodes on the Wi-Fi Hotspot: **`http://<HOST_IP>:8000`**

---

### Option 3: Direct Offline Browser Mode (No Server Needed)
- Simply double-click **`open_browser_offline.bat`** (or double-click **`index.html`**).
- Runs 100% offline inside your browser:
  - High-contrast light forest theme (Strictly zero blue).
  - Tri-lingual switching (English, Malayalam, Hindi).
  - Corridor route safety status and Google Maps route buttons.
  - Hidden Forest Officer Terminal (`🔒 Officer Access` in footer -> Passcode: `ranger2026`).
  - In-browser "⚡ Simulate Vehicle Ingest" to test animal detections with zero setup.

### 3. Test Ingestion via Simulator
In a separate terminal:
```powershell
python test_node_simulator.py
```
Or run continuous transmissions every 3 seconds:
```powershell
python test_node_simulator.py --continuous --interval 3.0
```

---

## 📡 ESP32-CAM Ingestion Format (`POST /api/v1/telemetry/ingest`)

```json
{
  "node_id": "VEHICLE_PROTOTYPE_01",
  "model_type": "FOMO",
  "telemetry": {
    "latitude": 11.6645,
    "longitude": 76.6210,
    "road_sector": "KM 42-46 (Elephant Corridor)",
    "speed_kmh": 30.5
  },
  "detections": [
    {
      "species": "elephant",
      "confidence": 0.95,
      "x": 138,
      "y": 105,
      "w": 0,
      "h": 0
    }
  ]
}
```

### Arduino C++ HTTP POST Snippet for ESP32-CAM:
```cpp
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "WildShield_Hotspot";
const char* password = "password123";
const char* serverUrl = "http://192.168.1.4:8000/api/v1/telemetry/ingest";

void sendTelemetry(const char* jsonPayload) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    int httpResponseCode = http.POST(jsonPayload);
    http.end();
  }
}
```

---

## ❓ Frequently Asked Questions & Troubleshooting

### Why does my browser show `127.0.0.1 refused to connect`?
This happens when you open your browser to `http://127.0.0.1:8000` while the Python backend server (`python main.py`) is not running.
- **Solution A (No Python / 100% Offline):** Double-click **`open_browser_offline.bat`** (or open `index.html` directly in Edge/Chrome).
- **Solution B (Full Live Backend):** Double-click **`run_full_system_demo.bat`**. Keep the command window open while using the dashboard.

### Why doesn't Google Maps open when clicking inside the IDE chat preview?
IDE chat previews run inside a sandboxed iframe that blocks external popups (`window.open`).
- In both the chat widget and the web dashboard, we have embedded an **In-Page Highway Radar Route Map (SVG)** showing the real highway path, checkposts, distance markers, and animated animal roadblocks right on screen without needing popups.
- Clicking the button also **automatically copies the direct Google Maps URL to your clipboard**, so you can paste (<kbd>Ctrl+V</kbd>) it into your browser.
- When you run the dashboard in your real browser (Edge or Chrome via `run_full_system_demo.bat` or `open_browser_offline.bat`), clicking the button opens Google Maps directly in a new tab.



---

## 🔒 Security, Authentication, RBAC & Session Management

WILDSHIELD features an enterprise-grade security and role-based access control (RBAC) architecture with three differentiated platform roles:

### 1. User Roles & Capabilities

| Role | Access Scope | Exact GPS Access | Incident Management | User Administration & Audit Logs | Telemetry CRUD |
| :--- | :--- | :---: | :---: | :---: | :---: |
| **ADMIN** | Dedicated Admin Dashboard | ✅ Full Unredacted | ✅ Yes (`ACTIVE`, `INVESTIGATING`, `RESOLVED`, `FALSE_ALARM`) | ✅ Full Access (Provision, Role Update, Activate/Deactivate) | ✅ Full CRUD (Create, Edit, Delete) |
| **FOREST OFFICER** | Dedicated Officer Dashboard | ✅ Full Unredacted | ✅ Yes (Update Status) | ❌ Restricted (403 Forbidden) | ❌ Read Only + Status (Delete Blocked) |
| **NORMAL USER / TRAVELER** | Public Traveler Portal | ❌ Quarantined (Anti-Poaching) | ❌ Public View Only | ❌ Restricted (403 Forbidden) | ❌ Read Only Public Alerts |

### 2. Secure Server-Side Session Architecture
- **Cryptographic Session Tokens:** Unpredictable 256-bit entropy tokens generated using Python `secrets.token_urlsafe(32)`.
- **Hashed Storage in Database:** Plaintext tokens are NEVER stored in SQLite. Only their SHA-256 digests (`hashlib.sha256(token).hexdigest()`) are persisted in the `sessions` table.
- **HTTP-Only Cookies:** Sessions are transferred via `wildshield_session` HTTP-only cookies (`SameSite=Lax`, `Path=/`, `Max-Age=86400`).
- **No `localStorage` Authority:** Passwords, session IDs, and authorization tokens are strictly forbidden from `localStorage`. Client-side authorization state is in-memory only and re-verified via `GET /api/v1/auth/me`.
- **CSRF Defense:** State-changing requests (`POST`, `PUT`, `DELETE`) require the `X-CSRF-Token` header.
- **Rate Limiting:** Sliding-window rate limiter prevents brute-force login attacks (maximum 5 failed attempts per 60 seconds per IP/email).

---

## 🚀 Setup & Testing Guide

### 1. Launching the System
> [!IMPORTANT]
> **Windows Browser Address:** When opening in Microsoft Edge or Google Chrome on Windows, always navigate to **`http://127.0.0.1:8000`** or **`http://localhost:8000`**. Windows browsers reject `http://0.0.0.0:8000/` with `ERR_ADDRESS_INVALID` because `0.0.0.0` is an interface binding address, not a valid browser destination address!

To launch the complete system with 1 click:
```cmd
run_full_system_demo.bat
```
Or start the server manually:
```cmd
python main.py
```
Open **`http://127.0.0.1:8000`** in your browser.

---

### 2. Creating / Provisioning the First Admin Account
A dedicated secure setup script provisions the primary Chief Wildlife Administrator:
```cmd
python setup_admin.py --email admin@wildshield.gov.in --name "Chief Wildlife Administrator" --password "Admin@WildShield2026!"
```
Or use the interactive prompt:
```cmd
python setup_admin.py
```

---

### 3. Testing All Three User Roles

#### A. Testing as Administrator (`ADMIN`)
1. Open **`http://127.0.0.1:8000`**.
2. Click **Sign In with Google** in the top-right header, or select the **Sign In** tab.
3. Enter Admin credentials:
   - **Email:** `admin@wildshield.gov.in`
   - **Password:** `admin2026` or `Admin@WildShield2026!`
   *(Or click the 1-Click Fast Demonstration Admin Login button)*.
4. **Verified Admin Features:**
   - Header shows gold **`ADMIN`** badge and user avatar.
   - 4 Stat Metric Cards: Total Records, Detected Species, Registered Accounts, Active Hazards.
   - 3-Tab Administration Console:
     - **📡 Telemetry Console:** View unredacted GPS (`📍 Lat, Lng`), species, speed, update incident statuses (`ACTIVE`, `INVESTIGATING`, `RESOLVED`, `FALSE_ALARM`), and use full CRUD: **➕ Add Sighting Record**, **✏️ Edit**, and **🗑️ Delete**.
     - **👥 User & Role Administration:** View all users, change roles via dropdown (`ADMIN`, `OFFICER`, `USER`), activate/deactivate accounts, and click **➕ Provision New Account** to create officers.
     - **📜 Security Audit Logs:** View real-time immutable audit trail with admin IDs, timestamps, and operations.

#### B. Testing as Forest Officer (`OFFICER`)
1. Click **🚪 Sign Out** in the header.
2. Click **Sign In**, and enter Officer credentials:
   - **Email:** `officer@wildshield.gov.in`
   - **Password:** `ranger2026`
3. **Verified Officer Features:**
   - Header shows emerald **`OFFICER`** badge.
   - Dedicated Officer Dashboard displaying live detections with exact GPS coordinates.
   - Can update incident investigation status on any record.
   - **RBAC Enforcement:** Delete buttons, User Management tab, and Security Audit Logs are completely hidden. If an officer attempts a DELETE API request, the backend returns **`HTTP 403 Forbidden`**.

#### C. Testing as Traveler / Normal User (`USER`)
1. Click **🚪 Sign Out** in the header.
2. Click **Sign In**, and choose the **Traveler Sign Up** tab:
   - **Name:** Your Name
   - **Email:** `traveler@gmail.com`
   - **Password:** `traveler2026`
   *(Or test unauthenticated without signing in)*.
3. **Verified Traveler Features:**
   - Public Traveler Portal with live road safety status and highway alerts.
   - **Anti-Poaching Protection:** Exact GPS coordinates are 100% quarantined/redacted. Only public highway corridor sectors (e.g. `NH-766 Sultan Bathery Sector`) are visible.
   - **One-Tap Emergency Helplines:** Tap `1926`, `+91 94479 79000`, or `112` for instant clipboard copy, audio feedback, and dialer modal.
   - **Hands-Free Voice Supporter:** Interactive commands ("Emergency Call", "Open Map", "Route Status", "മലയാളം", "हिन्दी").
   - **RBAC Enforcement:** Admin and Officer terminals are completely hidden. Protected API requests return **`HTTP 401 Unauthorized`** (if unauthenticated) or **`HTTP 403 Forbidden`**.

---

### 4. ESP32-CAM Hardware Node Security
Hardware nodes authenticate via pre-shared device API keys without requiring human logins:
```bash
curl -X POST "http://127.0.0.1:8000/api/v1/telemetry/ingest" \
     -H "Content-Type: application/json" \
     -H "X-Device-Key: esp32cam-node-secret-2026" \
     -d '{
       "node_id": "VEHICLE_PATROL_01",
       "model_type": "FOMO",
       "telemetry": { "latitude": 11.6645, "longitude": 76.6210, "road_sector": "KM 42-46 (Elephant Corridor)", "speed_kmh": 32.0 },
       "detections": [{ "species": "elephant", "confidence": 0.96, "x": 120, "y": 95, "w": 0, "h": 0 }]
     }'
```
- Missing or invalid `X-Device-Key` returns **`HTTP 401 Unauthorized`**.

---

### 5. Automated Security & RBAC Test Suite
Run the 8 automated security verification suites matching Section 11 of the specification:
```cmd
python test_security_rbac.py
```
Output verifies:
1. Normal user blocked from Admin User Management (HTTP 403).
2. Normal user blocked from deleting wildlife telemetry (HTTP 403).
3. Officer restricted from Admin areas and deletes (HTTP 403), permitted for telemetry & incident updates (HTTP 200).
4. Unauthenticated visitor blocked from protected APIs (HTTP 401); public alerts accessible (HTTP 200).
5. Admin full CRUD execution and immutable audit logging (HTTP 201, 200, 200).
6. Expired session rejected (HTTP 401).
7. Deactivated user rejected from login and APIs (HTTP 403).
8. Unauthorized device rejected (HTTP 401); authorized hardware ingested (HTTP 201).
