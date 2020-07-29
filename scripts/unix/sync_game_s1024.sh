#!/usr/bin/env bash
# 编译同步脚本
# 同步到headplayer_prod服务器

GAME_ROOT_DIR="`cd \"$(dirname $0)/../..\"; pwd`"
SCRIPTS_DIR=${GAME_ROOT_DIR}/scripts/unix
RELEASE_NAME=mmo_prod

# 检查参数
if [ ! -n "${1}" ]; then
    echo "Please input dest dir name"
    echo "Exp. sync_headplayer_prod.sh headplayer_release"
    echo "     sync_headplayer_prod.sh headplayer_review"
    exit 1
fi

# 检查配置分支
cd ${GAME_ROOT_DIR}
echo -e "Please make sure your config is in the right branch.\n"
cd ../y-config
git status

echo ""
read -p "Input 'ok', 'exit' or [config branch name] to continue: " user_input
if [ "${user_input}" = "ok" ]; then
    echo "ok"
elif [ "${user_input}" = "exit" ]; then
    echo "exit"
    exit 0
else
    git checkout ${user_input}
    if [ $? -ne 0 ]; then
        exit 1
    fi
fi

# 编译
cd ${GAME_ROOT_DIR}
bash ./server.sh gen_conf ${1}
bash ./server.sh config
bash ./server.sh release ${RELEASE_NAME}

RSYNC_CONF_PATH=${GAME_ROOT_DIR}/scripts/unix/rsync_conf
EXCLUDE_FILE=${RSYNC_CONF_PATH}/rsync_exclude

SQL_DIR=${GAME_ROOT_DIR}/scripts/sql
RELEASE_DIR="_build/default/rel/${RELEASE_NAME}/"
cp -r ${SQL_DIR} ${RELEASE_DIR}

# 同步
rsync -e 'ssh -p 18022' -avz --exclude-from=${EXCLUDE_FILE} ${RELEASE_DIR} root@193.112.176.192:/game/s1024/${1}
#./sync_file.sh -u root -h 193.112.176.192 -d /game/s997 -s 996 -a mmo_prod
