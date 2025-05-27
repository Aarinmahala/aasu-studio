@echo off
echo Starting AaSU STUDIO Website Server...
echo.
cd /d "%~dp0"
node run-server.js
pause 