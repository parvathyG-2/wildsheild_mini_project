#!/usr/bin/env python3
"""
WILDSHIELD // Root Server Launcher
Enables running 'python main.py' directly from the root workspace directory.
Delegates to backend/main.py seamlessly while preserving the clean frontend/backend architecture.
"""
import sys
import os
import runpy

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
BACKEND_DIR = os.path.join(ROOT_DIR, "backend")

# Ensure backend modules (auth_service, etc.) are in Python search path
if BACKEND_DIR not in sys.path:
    sys.path.insert(0, BACKEND_DIR)

if __name__ == "__main__":
    target_script = os.path.join(BACKEND_DIR, "main.py")
    runpy.run_path(target_script, run_name="__main__")

