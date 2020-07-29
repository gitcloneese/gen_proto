#!/bin/bash
#查询脚本位置，进入目录保证文件调用路径正确
x=`echo $0 | grep "^/"`
if test "${x}"; then
    cd $(dirname $0)
else
    cd $(dirname `pwd`/$0)
fi

. ../etc/mmo.rc

erl_call -e -c $COOKIE -n $NODE@$LOCAL_IP <<-Erlang
    mmo:stop().
Erlang

echo
