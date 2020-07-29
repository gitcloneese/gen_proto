#!/bin/sh
# 自动tail今日最新的日志
# Author: Shengning Piao


Date=`date "+%Y_%m_%d"`
Hour=`date "+%H"`

LogName=game_${Date}.log

#GameRootPath=`cd "$(dirname $0)/../.."; pwd`
#LogPath=${GameRootPath}/logs/${LogName}
#tail -f ${LogPath} | gawk -f ${GameRootPath}/scripts/log_reader/color_log.awk

LogPath=./_build/default/rel/mmo/log/debug_vv.log
#LogPath=./log/debug.log
echo ${LogPath}
tail -f ${LogPath} | gawk -f color_log.awk 
