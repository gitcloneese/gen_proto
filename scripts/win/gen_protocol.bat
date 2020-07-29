@echo off

escript.exe ../script/gen_proto ../deps/gpb/bin/protoc-erl -I../proto -o-erl ..\src\proto -o-hrl ..\include\proto -v never -strbin

call pbjs -t static-module -w closure --no-verify --no-convert --no-delimited --no-beautify --no-create -o ..\proto\protocol.js ..\proto\mmo_pb.proto
echo gen protocol.js success!
call pbts -n P --no-comments -o ..\proto\protocol.d.ts ..\proto\protocol.js
echo gen protocol.d.ts success!

python pp.py

echo All done!

