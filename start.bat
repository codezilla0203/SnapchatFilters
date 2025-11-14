@echo off
echo Installing dependencies...
call npm install

echo.
echo Starting development server...
echo The app will open in your browser at http://localhost:3000
echo.
call npm start

pause