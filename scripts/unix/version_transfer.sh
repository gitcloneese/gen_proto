#!/bin/bash
. ../etc/mmo.rc

erl_call -a "version_patch transfer_all []" -c $COOKIE -n $NODE@$LOCAL_IP

[[ $? != 0 ]] && echo "Error!!! version_transfer failed" || echo " version_transfer OK"
