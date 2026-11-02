import sys
import os
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))
#!/usr/bin/env python3
"""
WILDSHIELD // Vehicle Prototype ESP32-CAM Test Simulator
Sends simulated TinyML FOMO centroid or YOLO box telemetry packets over local Wi-Fi / Hotspot.
Features automatic server detection, graceful reconnects, and friendly status reporting.
"""

import os
import sys
import time
import argparse
import requests

DEVICE_KEY = os.environ.get("ESP32_DEVICE_KEY", "esp32cam-node-secret-2026")
DEVICE_HEADERS = {
    "X-Device-Key": DEVICE_KEY,
    "Content-Type": "application/json"
}

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')
if hasattr(sys.stderr, 'reconfigure'):
    sys.stderr.reconfigure(encoding='utf-8')

PRESETS = [
    {
        "name": "FOMO Elephant Centroid (KM 42-46) -> CRITICAL_BLOCK",
        "payload": {
            "node_id": "VEHICLE_PATROL_01",
            "model_type": "FOMO",
            "telemetry": {
                "latitude": 11.6645,
                "longitude": 76.6210,
                "road_sector": "KM 42-46 (Elephant Corridor)",
                "speed_kmh": 28.5
            },
            "detections": [
                {"species": "elephant", "confidence": 0.95, "x": 138, "y": 105, "w": 0, "h": 0}
            ]
        }
    },
    {
        "name": "YOLO Tiger Bounding Box (KM 50-54) -> CRITICAL_BLOCK",
        "payload": {
            "node_id": "VEHICLE_PATROL_02",
            "model_type": "YOLO",
            "telemetry": {
                "latitude": 11.6825,
                "longitude": 76.6435,
                "road_sector": "KM 50-54 (Buffer Crossing Zone)",
                "speed_kmh": 22.0
            },
            "detections": [
                {"species": "tiger", "confidence": 0.91, "x": 100, "y": 90, "w": 150, "h": 110}
            ]
        }
    },
    {
        "name": "FOMO Spotted Deer (KM 38-41) -> ADVISORY",
        "payload": {
            "node_id": "VEHICLE_PATROL_01",
            "model_type": "FOMO",
            "telemetry": {
                "latitude": 11.6495,
                "longitude": 76.6030,
                "road_sector": "KM 38-41 (River Valley Bend)",
                "speed_kmh": 39.0
            },
            "detections": [
                {"species": "deer", "confidence": 0.84, "x": 80, "y": 70, "w": 0, "h": 0}
            ]
        }
    }
]

def wait_for_server(base_url, verbose=True):
    """Checks if WildShield server is online; waits gracefully if not."""
    first_warn = True
    while True:
        try:
            r = requests.get(f"{base_url}/api/v1/network/status", timeout=1.5)
            if r.status_code == 200:
                if not first_warn and verbose:
                    print("✅ WildShield server connected! Streaming telemetry...\n")
                return True
        except (requests.exceptions.ConnectionError, requests.exceptions.Timeout):
            if first_warn and verbose:
                print("=" * 68)
                print("⚠️  WILDSHIELD SERVER IS NOT RUNNING YET!")
                print(f"Target: {base_url}")
                print("=" * 68)
                print("👉 The simulator needs the server to be running first.")
                print("   1. Double-click 'run_dashboard.bat' in the project folder, OR")
                print("   2. Run 'python main.py' in a separate terminal window.")
                print("=" * 68)
                print("Waiting for server to start... (auto-reconnecting every 2s)")
                first_warn = False
            time.sleep(2)
        except KeyboardInterrupt:
            print("\nSimulator cancelled by user.")
            sys.exit(0)

def run_test(base_url):
    print("=" * 68)
    print("🌿 WILDSHIELD // VEHICLE ESP32-CAM INGESTION TEST")
    print(f"Target Server: {base_url}")
    print("=" * 68)

    wait_for_server(base_url)
    ingest_url = f"{base_url}/api/v1/telemetry/ingest"

    for i, p in enumerate(PRESETS, 1):
        print(f"\n[Packet {i}/{len(PRESETS)}] Transmitting: {p['name']}")
        t0 = time.time()
        try:
            res = requests.post(ingest_url, json=p["payload"], headers=DEVICE_HEADERS, timeout=4)
            ms = (time.time() - t0) * 1000
            print(f"  -> HTTP {res.status_code} in {ms:.1f}ms: {res.json()}")
        except Exception as e:
            print(f"  -> Error: {e}")

    # Check Public route status
    print("\n[Verification] Querying Public Route Status (Sanitized):")
    try:
        r = requests.get(f"{base_url}/api/v1/public/route-status", timeout=4)
        print(f"  -> HTTP {r.status_code}: {r.json()[:2]}")
    except Exception as e:
        print(f"  -> Error: {e}")

    print("\n✅ Simulation cycle completed successfully!")

def main():
    parser = argparse.ArgumentParser(description="WildShield Telemetry Node Simulator")
    parser.add_argument("--url", default="http://127.0.0.1:8000", help="Base URL of WildShield server")
    parser.add_argument("--continuous", action="store_true", help="Continuously dispatch telemetry packets")
    parser.add_argument("--interval", type=float, default=3.0, help="Interval in seconds for continuous mode")
    args = parser.parse_args()

    if args.continuous:
        print(f"📡 Waiting for server and continuously dispatching telemetry every {args.interval}s.")
        print("Press Ctrl+C to stop.\n")
        wait_for_server(args.url)
        idx = 0
        try:
            while True:
                preset = PRESETS[idx % len(PRESETS)]
                try:
                    res = requests.post(f"{args.url}/api/v1/telemetry/ingest", json=preset["payload"], headers=DEVICE_HEADERS, timeout=3)
                    if res.status_code == 201:
                        data = res.json()
                        print(f"[{time.strftime('%H:%M:%S')}] ✅ {preset['payload']['model_type']} Node [{preset['payload']['node_id']}] -> {data.get('species').upper()} ({data.get('hazard_level')}) in {preset['payload']['telemetry']['road_sector']}")
                    else:
                        print(f"[{time.strftime('%H:%M:%S')}] HTTP {res.status_code}: {res.text}")
                except (requests.exceptions.ConnectionError, requests.exceptions.Timeout):
                    print(f"[{time.strftime('%H:%M:%S')}] ⚠️ Server connection lost. Waiting for server to reconnect...")
                    wait_for_server(args.url, verbose=False)
                idx += 1
                time.sleep(args.interval)
        except KeyboardInterrupt:
            print("\nContinuous telemetry simulator stopped.")
    else:
        run_test(args.url)

if __name__ == "__main__":
    main()
