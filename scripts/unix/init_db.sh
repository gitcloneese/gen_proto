#!/usr/bin/env bash

GAME_ROOT_DIR="`cd \"$(dirname $0)/../..\"; pwd`"
SCRIPTS_DIR=${GAME_ROOT_DIR}/scripts/unix
SQL_DIR=${GAME_ROOT_DIR}/scripts/sql

RELEASE_NAME=${1}
ETC_NAME=${GAME_ROOT_DIR}/etc/etc.${RELEASE_NAME}.conf

# 检查参数
if [ ! -n "${1}" ]; then
    echo "Please input etc name"
    echo "Exp. init_db.sh paul"
    exit 1
fi

if [ ! -f "${ETC_NAME}" ]; then
    echo "etc 文件不存在, 请检查."
    exit 1
fi

source ${ETC_NAME}

if [ "${SERVER}" = "mmo" ]; then
    SQL_NAME=db_game.sql
elif [ "${SERVER}" = "mmo_inter" ]; then
    SQL_NAME=db_inter.sql
else
    echo "错误的服务器类型. 请检查etc文件."
    exit 0
fi

echo "您要操作的数据库是: ${GAME_DB_POOL_DATABASE} 和 ${LOG_DB_POOL_DATABASE}"
read -p "该操作会清档, 请确认: 请输入 'ok' 或 'exit' " user_input
if [ "${user_input}" = "ok" ]; then
    echo "开始创建数据库..."
elif [ "${user_input}" = "exit" ]; then
    echo "exit"
    exit 0
else
    echo "exit"
    exit 0
fi


echo "创建 Game 数据库中"
mysql -h${GAME_DB_POOL_HOST} -P${GAME_DB_POOL_PORT} -u${GAME_DB_POOL_USER} -p${GAME_DB_POOL_PW} -e "create database if not exists ${GAME_DB_POOL_DATABASE};"
mysql -h${GAME_DB_POOL_HOST} -P${GAME_DB_POOL_PORT} -u${GAME_DB_POOL_USER} -p${GAME_DB_POOL_PW} -D ${GAME_DB_POOL_DATABASE} < ${SQL_DIR}/${SQL_NAME}
echo "完成"

if ! [ "${SERVER}" = "mmo_inter" ]; then
    echo "创建 Log 数据库中"
    mysql -h${LOG_DB_POOL_HOST} -P${LOG_DB_POOL_PORT} -u${LOG_DB_POOL_USER} -p${LOG_DB_POOL_PW} -e "create database if not exists ${LOG_DB_POOL_DATABASE};"
    mysql -h${LOG_DB_POOL_HOST} -P${LOG_DB_POOL_PORT} -u${LOG_DB_POOL_USER} -p${LOG_DB_POOL_PW} -D ${LOG_DB_POOL_DATABASE} < ${SQL_DIR}/db_log.sql
    echo "完成"
fi

echo "如果使用这个脚本来清档, 记得清除 login_server 的数据库."


