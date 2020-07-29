#!/bin/bash
ulimit -SHn 51200

ROOT_DIR=`cd $(dirname $0)/../..; pwd`
# 添加配置
source ${ROOT_DIR}/etc/mmo.rc
CONFIG=${ROOT_DIR}/etc/system.config
LOG_DIR=${ROOT_DIR}/log

ERL=erl
POLL=true
SMP=enable

SHOW_VERIFY=true
RELOADER_OP=false
MAINTAIN=false
APP_CTL=mmo_ctl

[ "${CONNECT_ALL}" = "" ] && CONNECT_ALL=true
[ "${ERL_MAX_ETS_TABLES}" = "" ] && ERL_MAX_ETS_TABLES=65536
[ "${ERL_MAX_PROCESSES}" = "" ] && ERL_MAX_PROCESSES=819200
[ "${ERL_MAX_PORTS}" = "" ] && ERL_MAX_PORTS=102400

# define additional environment variables
EBINS="${ROOT_DIR}/ebin ${ROOT_DIR}/ebin/deps/* ${ROOT_DIR}/ebin/game"
#echo "ebins is " $EBINS

STATUS_SUCCESS=0    # 成功
STATUS_ERROR=1      # 错误
STATUS_NORUN=2      # 未运行
STATUS_BADRPC=3     # rpc调用错误
STATUS_USAGE=4      # 用法错误

# 使用说明
usage () {
    echo "用法:"
    echo "$0 动作 [选项]"
    echo "动作:"
    echo "  start       启动服务器"
    echo "  stop        停止服务器"
    echo "  restart     重新启动服务器"
    echo "  status      获取后台运行状态"
    echo "  attach      remsh到服务器节点"
    echo "  live        交互模式启动"
    echo "  kill        kill服务器进程"
    echo "  eval Str    执行一段代码"
    echo "  reload      热更新"
    echo ""
    echo "选项:"
    echo "  -h, --help              显示本信息"
    echo "  -q, --quiet             执行操作时不显示交互确认"
    echo "  -r, --reloader            是否开启自动检测热更(默认不开)"
    echo "  -mt, --maintain           维护状态(默认不开)"
    echo ""
}

# 获取game.conf中某个配置
game_conf_value() {
    KEY=$1
    if [ -n "$KEY" ]; then
        echo `cat $ROOT_DIR/etc/game.config | grep "${KEY}" | tail -n 1 | sed -e "s/\s*{${KEY},\s*\(.*\)}.*/\1/"`
    fi
}

# 打印错误
error() {
    echo -e "\033[1;41m[错误]\033[0m(${ERLANG_NODE})> $@"
    exit 1
}

# 打印警告
warn() {
    echo -e "\033[1;43m[警告]\033[0m(${ERLANG_NODE})> $@"
}
# 打印警告不换行
warn2() {
    echo -e -n "\033[1;43m[警告]\033[0m(${ERLANG_NODE})> $@"
}

# 打印信息
show() {
    echo -e "\033[1;42m[操作]\033[0m(${ERLANG_NODE})> $@"
}

# 打印rpc返回信息
print_rpc_return () {
    case $1 in
    $STATUS_SUCCESS) 
        echo ""
        ;;
    $STATUS_ERROR) 
        error "操作发生错误"
        ;;
    $STATUS_NORUN) 
        warn "未运行"
        ;;
    $STATUS_BADRPC) 
        error "rpc调用错误"
        ;;
    $STATUS_USAGE) 
        error "用法错误"
        ;;
    *)
        error "未知返回值:$1"
    esac
}

# 提示确认信息
show_verify() {
    if [ "$SHOW_VERIFY" = "true" ]; then
        echo -n "请确认要执行$ACTION操作?(y|n):"
        read option
        case $option in
            "y");;
            *)exit 1;;
        esac
    fi
}

# start server in live mode
live () {
    if is_started start; then
        warn "节点已启动"
        exit 0
    fi
    $ERL \
    $NAME_FLAG ${ERLANG_NODE} \
    -setcookie $COOKIE \
    -boot start_sasl \
    -pa $EBINS \
    -config $CONFIG \
    ${ERLANG_OPTS} ${RUN_APPS}
}


# start server
start () {
    if is_started start; then
        warn "节点已启动"
        exit 0
    fi
    cd ${ROOT_DIR}/script
    $ERL \
    $NAME_FLAG ${ERLANG_NODE} \
    -setcookie $COOKIE \
    -boot start_sasl \
    -pa $EBINS \
    -config $CONFIG \
    ${ERLANG_OPTS} ${RUN_APPS} \
    -eval "mochiglobal:put(maintain, ${MAINTAIN})." \
    -detached
    RETRY=0
    while [ $RETRY -lt 60 ]; do
        if [ $? -ne 0 ]; then
            error "启动失败:$?"
        else
            if is_started; then
                show "启动成功"
                break
            fi
            if is_crashed; then
                error "启动失败，发生crash"
            else
                echo "等待${ERLANG_NODE}启动中 $RETRY..."
                let RETRY++
                sleep 1
            fi
            if [ $RETRY -ge 30 ]; then
                warn "!!!服务器启动失败,请手动检查!!!"
                exit 1
            fi
        fi
    done
}

# stop server
stop () {
    if is_started; then
        show_verify;
        if rpc stop; then
            wait_node_pid_exit
        else
            print_rpc_return $?
        fi
    else
        print_rpc_return $STATUS_NORUN
    fi
}

server_sync()
{
    rsync \
        -av --progress --delete \
        --exclude logs \
        --exclude .git \
        --exclude .DS_Store \
        --exclude src \
        --exclude ./deps \
        --exclude ./etc \
        -e ssh ./* admin@linux-server:/data/game/server/
    return 0
}

# 等待节点进程退出
wait_node_pid_exit() {
    RETRY=0
    while [ $RETRY -lt 60 ]; do
        PID=$(node_pid)
        if [ "$PID" != '' ]; then
            if [ $RETRY -ge 30 ]; then
                warn2 "节点进程$PID退出超时，是否kill?(y|n):"
                read option
                case $option in
                    "y") kill $PID; show "停止成功"; exit 0;;
                    *) exit 1;;
                esac
            fi
        else
            show "停止成功"
            break
        fi
        echo "等待${ERLANG_NODE}退出中 $RETRY..."
        let RETRY++
        sleep 1
    done
}

# 获取状态
status () {
    if is_started status; then
        show "运行中"
    else
        RET=$?
        print_rpc_return $RET
        exit $RET
    fi  
}

# kill server
kill2 () {
    if is_started; then
        warn2 "节点运行中，是否kill?(y|n):"
        read option
        case $option in
            "y") ;;
            *) exit 1;;
        esac
    fi
    PID=$(node_pid)
    if [ "$PID" != '' ]; then
        kill $PID
    fi
    show "kill成功"
}

# 判断节点是否运行
is_started () {
    PID=$(node_pid)
    if [ "$PID" != '' ]; then
        rpc status
        result=$?
        if [ "$result" = "$STATUS_SUCCESS" ]; then
            return $STATUS_SUCCESS
        elif [ "$1" = "start" ]; then
            error "节点进程$PID已存在"
        elif [ "$1" = "status" ]; then
            warn "节点已关闭，进程$PID未退出"
        fi
    fi
    return $STATUS_NORUN
}

node_pid() {
    PID=`ps awux | grep "$ERLANG_NODE" | egrep -v "\-remsh|grep" | awk '{print $2}'`
    echo $PID
}

# 判断节点是否crash
is_crashed() {
    if [ -f ${ERL_DUMP_FILE} ]; then
        return 0
    fi
    return 1
}

# 查询运行中节点的信息
rpc() {
    RPC_NODE=ctl-${ERLANG_NODE}
    $ERL \
    $NAME_FLAG ${RPC_NODE} \
    -setcookie $COOKIE \
    -noinput -hidden \
    -pa $EBINS \
    -s ${APP_CTL} -extra ${ERLANG_NODE} $@
}

# attach server
attach () {
    ATTACH_NODE=remsh-${RANDOM}-${ERLANG_NODE}
    $ERL \
    $NAME_FLAG ${ATTACH_NODE} \
    -setcookie $COOKIE \
    -hidden \
    -remsh ${ERLANG_NODE}
}

config () {
    bash ${ROOT_DIR}/../y-config/scripts/export_all.sh
    rsync -av --delete ${ROOT_DIR}/../y-config/server/* apps/mmo/src/data/
}

#reload server
reload(){
        if [ $# -gt 0 ]; then
            rpc reload "$@"
        else
            rpc reload
        fi
        result=$?
        if [ "$result" = "$STATUS_SUCCESS" ]; then
           echo  节点热更新成功""
        else
            warn "热更新失败,请查看节点状态"
        fi  
}

# 执行一段代码
eval2 () {
    if ! is_started; then
        error "未运行"
    fi
    rpc eval "$@"
    result=$?
    if [ "$result" = "$STATUS_SUCCESS" ]; then
        return 0
    fi
}


# parse command line parameters
while [ $# -ne 0 ] ; do
    PARAM=$1
    shift
    case $PARAM in
        --) break ;;
        --reloader|-r) RELOADER_OP=true;;
        --maintain|-mt) MAINTAIN=true;;
        --help|-h) usage; exit 0;;
        --quit|-q) SHOW_VERIFY=false;;
        *) ARGS="$ARGS $PARAM" ;;
    esac
done

#检测开启的是否是中心服
ISINTER=$(game_conf_value inter_flag)
if [ "$ISINTER" = "false" ]; then
    RUN_APPS="-s mmo -s mmo_admin "
else
    RUN_APPS="-s mmo_inter "
fi   
if [ "$RELOADER_OP" = "false" ]; then
    RUN_APPS=$RUN_APPS
else
    RUN_APPS=$RUN_APPS" -s reloader"
fi  


DATETIME=`date "+%Y%m%d%H%M%S"`
ERL_DUMP_FILE=${ROOT_DIR}/${DATETIME}.dump
ERLANG_NODE=$NODE@$LOCAL_IP
ERLANG_OPTS="+e $ERL_MAX_ETS_TABLES +P $ERL_MAX_PROCESSES +Q $ERL_MAX_PORTS \
             +K $POLL -smp $SMP +zdbbl 81920 -connect_all $CONNECT_ALL \
             -env ERL_CRASH_DUMP $ERL_DUMP_FILE \
             -env ROOT_DIR ${ROOT_DIR}"
#RUN_APPS="-s mmo -s mmo_admin -s reloader"

NAME_FLAG=-name
[ "${ERLANG_NODE}" = "${ERLANG_NODE%@*}" ] && NAME_FLAG=-sname

set -- $ARGS
ACTION=$1
shift
case ${ACTION} in
    '') usage;;
    'start') start;;
    'stop') stop;;
    'restart') stop; start;;
    'live') live;;
    'status') status;;
    'attach') attach;;
    'kill') kill2;;
    'reload') reload $@;;
    'eval') eval2 $@;;
    'sync') server_sync $@;;
    'config') config;;
    *) usage; exit 1;;
esac
