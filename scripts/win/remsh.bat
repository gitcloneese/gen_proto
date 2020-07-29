@echo off
for /f "tokens=1,2 delims==" %%a in (../etc/mmo.rc) do set %%a=%%b
start werl -name dbg_mmo@%LOCAL_IP% -setcookie %COOKIE% -remsh %NODE%@%LOCAL_IP%
