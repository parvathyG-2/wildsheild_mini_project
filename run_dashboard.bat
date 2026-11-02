@echo off
title WildShield Telemetry Server
cd /d "%~dp0"
cls
echo ===================================================================
echo   [ WILDSHIELD // PRODUCTION TELEMETRY & FOREST SAFETY SERVER ]
echo ===================================================================
echo   Dashboard URL : http://127.0.0.1:8000
echo   Status        : Launching server & opening your web browser...
echo   [IMPORTANT]   : Keep this black command window OPEN while using!
echo ===================================================================
echo.

:: Automatically open default browser after 2 seconds
start "" cmd /c "timeout /t 2 /nobreak >nul & start http://127.0.0.1:8000"

:: Start the Python server with fallback checks
python --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    python main.py
    goto server_stopped
)

py --version >nul 2>&1
if %ERRORLEVEL% equ 0 (
    py -3 main.py
    goto server_stopped
)

if exist "C:\Program Files\Python314\python.exe" (
    "C:\Program Files\Python314\python.exe" main.py
    goto server_stopped
)

echo.
echo [ERROR] Python was not found in your system PATH!
echo You can still open "index.html" directly in your browser.
echo.

:server_stopped
echo.
echo ===================================================================
echo Server process has stopped.
echo ===================================================================
pause
