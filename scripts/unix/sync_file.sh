#! /usr/bin/env bash
#source `dirname $0`/common.sh
GAME_ROOT_DIR=`dirname $0`/../..
RSYNC_CONF_PATH=${GAME_ROOT_DIR}/scripts/unix/rsync_conf
PASS_FILE=${RSYNC_CONF_PATH}/rsync_rsa
EXCLUDE_FILE=${RSYNC_CONF_PATH}/rsync_exclude
#SSH_OPT="ssh -o \"ProxyCommand nc %h %p\" -i ${PASS_FILE}"
SSH_OPT="ssh -p 18022 -o \"ProxyCommand nc %h %p\""
#RSYNC_OPT="--delete"
RSYNC_OPT=""
RSYNC_SH=/usr/bin/rsync
RSYNC_EXCLUDE=true

SERVER="s1"
FILES=""

USER=root
HOST=""
GAME_DIR=/game

SYNC_ALL=false
SHOW_VERIFY=true

usage() {
    echo ""
    echo "用法："
    echo "$0 [选项] 文件列表"
    echo "举例："
    echo "同步./config ./ebin ./sh ./db目录到192.168.10.210的4399_s1目录"
    echo "$0 -s 4399s1 -u root -h 192.168.10.210 -a"
    echo "选项："
    echo "  --help                  显示本信息"
    echo "  -q, --quiet             执行操作时不显示交互确认"
    echo "  -u                      用户名(默认root用户)"
    echo "  -h                      目标机器IP"
    echo "  -s                      目录名"
    echo "  -a                      同步指定release的文件"
    echo "  -f                      取消rsync的exclude-from选项"
    echo "  -d                      服务器根目录，默认${GAME_DIR}"
    echo ""
}

# parse command line parameters
while [ $# -ne 0 ] ; do
    PARAM=$1
    shift
    case $PARAM in
        --) break ;;
        --help) usage; exit 0;;
        -u) USER=$1; shift;;
        -h) HOST=$1; shift;;
        -s) SERVER=$1; shift;;
        -d) GAME_DIR=$1; shift;;
        -a) SYNC_ALL=true; SYNC_SOURCE_DIR=${GAME_ROOT_DIR}/_build/default/rel/${1}; shift;;
        -f) RSYNC_EXCLUDE=false; shift;;
        --quit|-q) SHOW_VERIFY=false;;
        *) FILES="$FILES $PARAM" ;;
    esac
done

PLATFORM=${SERVER%s*}
SERVER_ID=${SERVER//*s/s}

if [ "$RSYNC_EXCLUDE" = "true" ]; then
    RSYNC_OPT=${RSYNC_OPT}" --exclude-from=${EXCLUDE_FILE}"
fi


# 显示确认
show_confirm() {
    if [ "$SHOW_VERIFY" = "true" ]; then
        echo -n "请确认要执行同步到$SERVER?(yes/no):"
        read CONFIRM
        if [ "$CONFIRM" != "yes" ]; then
            exit 0
        fi
    fi
}

# 获取更新文件列表
get_files() {
    STR=
    for F in ${FILES}; do
        EXT=${F##*.}
        if [ "${EXT}" == $F ]; then
            STR="${STR} ebin/${F}.beam"
        elif [ "${EXT}" == "beam" ]; then
            STR="${STR} ebin/${F}"
        else
            STR="${STR} ${F}"
        fi
    done
    echo $STR
}

get_sync_dir() {
    #echo "${PLATFORM}_${SERVER_ID}/"
    echo "${SERVER}/"
}

# 推送同步
do_rsync() {
    show_confirm
    SYNC_DIR=$(get_sync_dir)
    rsync -ave "${SSH_OPT}" ${RSYNC_OPT} $@ $USER@$HOST:${GAME_DIR}/${SYNC_DIR}
}

do_rsync_file() {
    SYNC_DIR=$(get_sync_dir)
    PATH=()
    FILES=()
    for i in $@
    do
        if [ ! -e $i ]; then
           echo "文件$i不能存在，请重试!"
           exit 1
        fi
        F=$i
        D=${i%/*}
        J=0
        for p in ${PATH[*]}
        do 
           if [ $D = ${p} ]; then
              FILES[$J]="${FILES[$J]} $F"
              break
           fi
           let J=J+1
        done
        if [ $J = ${#PATH[@]} ]; then
           PATH[$J]=${D}
           FILES[$J]=${F}
        fi
    done
    J=0
    for p in ${PATH[*]}
    do 
       echo "====================[$p]==================="
       ${RSYNC_SH} -ave "${SSH_OPT}" ${RSYNC_OPT} ${FILES[$J]} ${USER}@${HOST}:${GAME_DIR}/${SYNC_DIR}${p}/
       let J=J+1
    done
}

SYNC_DIR=$(get_sync_dir)

if [ "${USER}" == "" -o "${HOST}" == "" ]; then
    usage    
    exit 0
fi

if [ "${SYNC_ALL}" == "true" ]; then
    do_rsync ${SYNC_SOURCE_DIR}
else
    FILE_STR=$(get_files)
    if [ "${FILE_STR}" == "" ]; then
        exit 0
    fi
    do_rsync_file $FILE_STR
fi
