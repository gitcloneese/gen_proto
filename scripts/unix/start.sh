#!/bin/bash
set -x
. ../etc/mmo.rc

if [[ $1 == "maintain" ]]; then
    sh server.sh start -mt
else
    sh server.sh start
fi




