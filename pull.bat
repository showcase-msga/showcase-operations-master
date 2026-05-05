@echo off
REM ============================================
REM  Showcase Ops Master - Git Pull
REM  Pulls the latest changes from GitHub
REM ============================================

cd /d "%~dp0"

echo.
echo ===========================================
echo  Pulling latest from GitHub...
echo ===========================================
echo.

git pull

echo.
if %ERRORLEVEL% EQU 0 (
    echo Pull complete.
) else (
    echo Pull failed. Check the error above.
)

echo.
pause
