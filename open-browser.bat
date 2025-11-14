@echo off
echo Opening Snapchat Filters Demo...
echo.
echo Trying to open in your default browser:
echo - http://localhost:8080
echo - http://127.0.0.1:8080
echo.

start http://localhost:8080
timeout /t 2 /nobreak >nul
start http://127.0.0.1:8080

echo.
echo If the browser doesn't open automatically, manually visit:
echo http://localhost:8080
echo.
pause