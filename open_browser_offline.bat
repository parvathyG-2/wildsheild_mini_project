@echo off
title WildShield Offline Dashboard
cd /d "%~dp0"
cls
echo ===================================================================
echo   [ WILDSHIELD DIRECT OFFLINE DASHBOARD ]
echo ===================================================================
echo   Opening frontend directly in your default web browser...
echo   (No Python or server required - runs 100% offline)
echo ===================================================================
if exist "frontend\index.html" (
    start "" "frontend\index.html"
) else (
    start "" "index.html"
)
