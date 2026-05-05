@echo off
REM ============================================
REM  Showcase Ops Master - Git Push
REM  Stages all changes, commits, and pushes
REM ============================================

cd /d "%~dp0"

echo.
echo ===========================================
echo  Pushing changes to GitHub...
echo ===========================================
echo.

REM Show what's changed
echo Changes detected:
git status --short
echo.

REM Check if there's anything to commit
git diff --quiet --cached
set CACHED=%ERRORLEVEL%
git diff --quiet
set UNSTAGED=%ERRORLEVEL%

if %CACHED% EQU 0 if %UNSTAGED% EQU 0 (
    echo Nothing to commit. Working tree clean.
    echo.
    pause
    exit /b 0
)

REM Prompt for commit message
set /p MSG="Commit message (leave blank for auto): "

REM Use timestamp if no message provided
if "%MSG%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "DT=%%a"
    set "MSG=Update %DT:~0,4%-%DT:~4,2%-%DT:~6,2% %DT:~8,2%:%DT:~10,2%"
)

echo.
echo Staging all changes...
git add .

echo.
echo Committing...
git commit -m "%MSG%"

echo.
echo Pushing to GitHub...
git push

echo.
if %ERRORLEVEL% EQU 0 (
    echo ===========================================
    echo  Done. Site will rebuild in ~60 seconds.
    echo ===========================================
) else (
    echo ===========================================
    echo  Push failed. Check the error above.
    echo ===========================================
)

echo.
pause
