@echo off
title WildShield Full System Launcher
cd /d "%~dp0"
cls
echo ===================================================================
echo   🌿 WILDSHIELD // 1-CLICK COMPLETE SYSTEM LAUNCHER
echo ===================================================================
echo   1. Starting Telemetry Ingestion Server (backend\main.py)...
echo   2. Starting Vehicle Simulator Node Stream...
echo   3. Opening Web Dashboard in your default browser...
echo ===================================================================
echo.

set SERVER_SCRIPT=backend\main.py

set SIM_SCRIPT=backend\tests\test_node_simulator.py
if not exist "%SIM_SCRIPT%" set SIM_SCRIPT=test_node_simulator.py

:: Launch the Server in a new dedicated window
start "WildShield Telemetry Server" cmd /k "title WildShield Server && cd /d "%~dp0" && python %SERVER_SCRIPT%"

:: Wait 2 seconds for the server to bind the port
timeout /t 2 /nobreak >nul

:: Launch the Continuous Vehicle Telemetry Simulator in a separate window
start "WildShield Vehicle Simulator" cmd /k "title Vehicle Simulator && cd /d "%~dp0" && python %SIM_SCRIPT% --continuous --interval 3.0"

:: Open the browser to the live dashboard
start http://127.0.0.1:8000

echo.
echo ===================================================================
echo   ✅ ALL MODULES LAUNCHED!
echo   - Telemetry Server is running on http://127.0.0.1:8000
echo   - Vehicle Simulator is broadcasting mock ESP32-CAM detections
echo   - Web Dashboard is open in your browser
echo ===================================================================
echo.
pause
