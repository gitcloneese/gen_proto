rem @echo off
PATH=C:\Program Files\erl7.3\bin;%PATH%
for /f "tokens=1,2 delims== " %%a in (../etc/mmo.rc) do set %%a=%%b
set ADD_PATH=-pa ../ebin/deps/emysql ^
             -pa ../ebin/deps/goldrush ^
             -pa ../ebin/deps/lager ^
             -pa ../ebin/deps/mochiweb ^
             -pa ../ebin/deps/recon ^
             -pa ../ebin/deps/misc ^
             -pa ../ebin/deps/game_geom ^
             -pa ../ebin/game ^
             -pa ../ebin

set DUMP_DIR=../log/dump/

set H=%time:~0,2%
set H=%h: =0%
set DUMP_FILE=%DUMP_DIR%dump_%date:~0,4%%date:~5,2%%date:~8,2%%H%%time:~3,2%%time:~6,2%.dump

set PROC=20480
set SMP=auto

start werl +P %PROC% %ADD_PATH% ^
    -smp %SMP% ^
    -config ../etc/mmo_inter ^
    -env ERL_CRASH_DUMP %DUMP_FILE% ^
    -name mmo_inter@%LOCAL_IP% ^
    -setcookie %COOKIE% ^
    -connect_all %CONNECT_ALL% ^
    +e %ERL_MAX_ETS_TABLES% ^
    +P %ERL_MAX_PROCESSES% ^
    +Q %ERL_MAX_PORTS% ^
    +zdbbl 81920 ^
    -boot start_sasl ^
    -s reloader ^
    -s mmo_inter start


