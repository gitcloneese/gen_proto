@echo off
setlocal ENABLEDELAYEDEXPANSION
set EVA=""
set MAKE_OPTS=''
PATH=C:\Program Files\erl7.3\bin;%PATH%
:MAIN
if "%1" == "" (
SET EVA="case mmake:all(8, [!MAKE_OPTS!]) of up_to_date -> halt(0); error -> halt(1) end."
call :MAKE !EVA!
) else if "%1" == "deps" (
SET EVA="case mmake:all(8, [!MAKE_OPTS!]) of up_to_date -> halt(0); error -> halt(1) end."
call :MAKEDEPS !EVA!
) else if "%1" == "py" (
python make.py
) else if "%1" == "debug" (
set MAKE_OPTS=!MAKE_OPTS!,debug_info
SET EVA="case mmake:all(8, [!MAKE_OPTS!]) of up_to_date -> halt(0); error -> halt(1) end."
call :MAKE !EVA!
) else if "%1" == "clean" (
call :CLEAN
) else (
echo 参数错误!
echo ===============================================================================
echo 默认编译:          make
echo 忽略头文件编译:    make py
echo 编译debug版本:     make debug
echo 清空编译的beam:    make clean
)
GOTO :EOF

rem 清空beam
:CLEAN
del ..\ebin\game\*.beam
echo 清空编译文件 ok!
GOTO :EOF

rem 编译
:MAKE
echo 开始编译，请勿关闭窗口！
cd ..
erl -pa "./deps/make" -noinput -eval %1
if "%errorlevel%" == "0" (echo 文件编译成功！
) else (echo 文件编译失败！%errorlevel%)
pause
GOTO :EOF

rem make deps
:MAKEDEPS
cd ../deps/
erl -pa "./make" -noinput -eval %1
pause
GOTO :EOF