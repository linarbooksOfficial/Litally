@echo off
setlocal
cd /d "%~dp0"
title Push to GitHub: Litally

echo =======================================================
echo   PUSHING LITALLY CODE TO GITHUB
echo   Repository: https://github.com/linarbooksOfficial/Litally
echo =======================================================
echo.

set "PATH=%LOCALAPPDATA%\Programs\MinGit\cmd;%LOCALAPPDATA%\Programs\MinGit\gcm;%PATH%"

echo Checking Git...
git.exe --version
if errorlevel 1 (
    echo [ERROR] Git not found.
    pause
    exit /b 1
)

echo.
echo Pushing to GitHub main branch...
echo (A browser window may open to sign in to GitHub)
echo.
git.exe push -u origin main

if errorlevel 1 (
    echo.
    echo =======================================================
    echo   [ERROR] Push failed.
    echo =======================================================
) else (
    echo.
    echo =======================================================
    echo   [SUCCESS] Code pushed successfully to GitHub!
    echo   URL: https://github.com/linarbooksOfficial/Litally
    echo =======================================================
)

echo.
pause
