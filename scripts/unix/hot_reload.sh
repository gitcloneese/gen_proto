#!/bin/bash
GAME_ROOT_DIR="`cd \"$(dirname $0)/../\"; pwd`"
# mac
#ERL_CALL=/usr/local/lib/erlang/lib/erl_interface-3.13/bin/erl_call

# linux
ERL_CALL=/usr/local/lib/erlang/lib/erl_interface-3.10.2.2/bin/erl_call

# 4399
#ERL_CALL=/usr/local/erlang/lib/erlang/lib/erl_interface-3.10.2.2/bin/erl_call

COOKIE=`grep "\-setcookie" ${GAME_ROOT_DIR}/releases/0.0.1/vm.args | awk '{print $2}'`
NODENAME=`grep "\-name" ${GAME_ROOT_DIR}/releases/0.0.1/vm.args | awk '{print $2}'`


hot_update(){
    if [ $# == 0 ]; then
        $ERL_CALL -a "hot_reload reload_all [0]" -c $COOKIE -n "$NODENAME"
    else
        mods=`echo $@ | tr ' ' ','`
        $ERL_CALL -a "hot_reload reload [[${mods}]]" -c $COOKIE -n "$NODENAME"
    fi
}
hot_update $@
exit $?

#[[ $? != 0 ]] && echo "Error!!! hot_update failed" || echo " hot_udpate OK"
