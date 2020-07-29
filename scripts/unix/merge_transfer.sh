#!/bin/bash
. ../etc/mmo.rc

erl_call -a "merge_master fix []" -c $COOKIE -n $NODE@$LOCAL_IP

[[ $? != 0 ]] && echo "Error!!! merge_master fix failed" || echo " merge_master fix OK"
