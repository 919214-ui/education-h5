@echo off
set PORT=3000
if "%ADMIN_PASSWORD%"=="" set ADMIN_PASSWORD=admin123
node server.js
