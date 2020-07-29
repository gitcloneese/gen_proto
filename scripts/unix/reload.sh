#!/bin/bash
GAME_ROOT_DIR="`cd \"$(dirname $0)\"; pwd`"
# mac
ERL_CALL=/usr/local/lib/erlang/lib/erl_interface-3.13/bin/erl_call
#NODENAME=mmo_dev_s2@192.168.0.54

# linux
#ERL_CALL=/usr/local/lib/erlang/lib/erl_interface-3.10.1/bin/erl_call
COOKIE=`grep "\-cookie" ${GAME_ROOT_DIR}/releases/0.0.1/vm.args`
NODENAME=`grep "\-name" ${GAME_ROOT_DIR}/releases/0.0.1/vm.args`


hot_update(){
    if [ $# == 0 ]; then
        $ERL_CALL -a "hot_reload reload_all [\"0\"]" -c $COOKIE -n $NODENAME
    else
        mods=`echo $@ | tr ' ' ','`
        $ERL_CALL -a "hot_reload reload [[${mods}]]" -c $COOKIE -n $NODENAME
    fi
}
hot_update $@
exit $?

#[[ $? != 0 ]] && echo "Error!!! hot_update failed" || echo " hot_udpate OK"
