@echo off
PATH=C:\Program Files\erl7.3\bin;%PATH%

echo gen log operation ...
erl -noinput ^
    -pa ../ebin/game -pa ../ebin/deps/mochiweb ^
    -eval "log_utils:gen_log_operation()" ^
    -eval "init:stop()"
