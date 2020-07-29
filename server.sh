#!/bin/bash

GAME_ROOT_DIR="`cd \"$(dirname $0)\"; pwd`"
SCRIPTS_DIR=${GAME_ROOT_DIR}/scripts/unix
PROTO_TOOL=${GAME_ROOT_DIR}/tools/BuildProto.exe

UNAME=`uname`
PLATFORM=unknown
SLASH=/

DEFAULT_RELEASE_NAME=mmo


# Mac
if [ $UNAME = "Darwin" ] ; then
    echo "Platform: Darwin"
    PLATFORM=Darwin
# FreeBSD
elif [ $UNAME = "FreeBSD" ] ; then
    echo "Platform: FreeBSD"
    PLATFORM=FreeBSD
# Linux
elif [ $UNAME = "Linux" ] ; then
    echo "Platform: Linux"
    PLATFORM=Linux
# Windows
elif [ ${UNAME:0:9} = "CYGWIN_NT" ] ; then
    echo "Platform: Windows"
    PLATFORM=Cygwin
fi

fun_clean ()
{
    ./rebar3 clean
}

fun_compile ()
{
    echo ${GAME_ROOT_DIR}
    ./rebar3 compile
}

fun_recompile ()
{
    fun_clean
    fun_compile
}

fun_release ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi
        
    ./rebar3 release -n ${release_name}
}

fun_console ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    fun_release ${release_name}

    if [ $PLATFORM = "Cygwin" ] ; then
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name}.cmd console
    else
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name} console
    fi
    cd -
}

fun_start ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    fun_release ${release_name}
    if [ $PLATFORM = "Cygwin" ] ; then
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name}.cmd start
    else
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name} start
    fi
    cd -
}

fun_stop ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    if [ $PLATFORM = "Cygwin" ] ; then
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name}.cmd stop
    else
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name} stop
    fi
    cd -
}

fun_restart ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    fun_release ${release_name}
    fun_stop ${release_name}
    fun_start ${release_name}
}

fun_attach ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    if [ $PLATFORM = "Cygwin" ] ; then
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name}.cmd remote_console
    else
        cd "${GAME_ROOT_DIR}/_build/default/rel/${release_name}"
        ./bin/${release_name} remote_console
    fi
    cd -
}

fun_cmd ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    RELEASE_NAME=${release_name}
    shift
    cd "${GAME_ROOT_DIR}/_build/default/rel/${RELEASE_NAME}"
    ./bin/${RELEASE_NAME} $@
    cd -
}

fun_sync ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    fun_release ${release_name}
    ${SCRIPTS_DIR}/sync_prod.sh ${release_name}
}

fun_sync_4399 ()
{
    release_name=$1
    if [ -z "$1" ] ; then
        release_name=${DEFAULT_RELEASE_NAME}
    fi

    rm -rf _build/default/rel/${release_name}
    cp "${GAME_ROOT_DIR}/../y-config/server/*" apps/mmo/src/data

    fun_gen_conf dev
    fun_release ${release_name}
    mkdir -p _build/default/rel/${release_name}/sql
    cp "${SCRIPTS_DIR}/hot_reload_4399.sh" _build/default/rel/${release_name}/bin/hot_reload.sh
    cp "${SCRIPTS_DIR}/../sql/db_game.sql" _build/default/rel/${release_name}/sql/
    "${SCRIPTS_DIR}/sync_prod_4399.sh" ${release_name}

    rm -rf _build/default/rel/inter_prod
    fun_gen_conf inter-dev
    fun_release inter_prod
    mkdir -p _build/default/rel/inter_prod/sql
    cp "${SCRIPTS_DIR}/hot_reload_4399.sh" _build/default/rel/inter_prod/bin/hot_reload.sh
    cp "${SCRIPTS_DIR}/../sql/db_inter.sql" _build/default/rel/inter_prod/sql/
    "${SCRIPTS_DIR}/sync_prod_4399.sh" inter_prod
}

fun_tail ()
{
    release_name=$1
    log_name=$2

    if [[ -z "$1"  ||  -z "$2" ]] ; then
        release_name=${DEFAULT_RELEASE_NAME}
        log_name=debug
    fi

    LOGFILE="${GAME_ROOT_DIR}/_build/default/rel/${release_name}/log/${log_name}.log"

    echo ${LOGFILE}
    tail -f ${LOGFILE}
}

fun_vim ()
{
    release_name=$1
    log_name=$2

    if [[ -z "$1"  ||  -z "$2" ]] ; then
        release_name=${DEFAULT_RELEASE_NAME}
        log_name=debug
    fi

    LOGFILE="${GAME_ROOT_DIR}/_build/default/rel/${release_name}/log/${log_name}.log"

    echo ${LOGFILE}
    vim ${LOGFILE}
}

fun_gvim ()
{
    release_name=$1
    log_name=$2

    if [[ -z "$1"  ||  -z "$2" ]] ; then
        release_name=${DEFAULT_RELEASE_NAME}
        log_name=debug
    fi

    LOGFILE="${GAME_ROOT_DIR}/_build/default/rel/${release_name}/log/${log_name}.log"

    echo ${LOGFILE}
    mvim ${LOGFILE}
}

fun_config () {
    bash "${GAME_ROOT_DIR}/../y-config/scripts/export_all.sh"
    rsync -av --delete "${GAME_ROOT_DIR}/../y-config/server/" apps/mmo/src/data/
    fun_compile
}

fun_gen_conf () {
    cd ${GAME_ROOT_DIR}/scripts/unix/
    bash gen_conf.sh $@
    cd -
}

# 使用说明
fun_usage ()
{
    echo ""
    echo "用法:"
    echo "$0 动作 [选项]"
    echo "动作:"
    echo "  config          生成策划配置"
    echo "  gen_conf        生成服务器配置"
    echo "  #proto           编译协议"
    echo "  clean           清理所有编译文件"
    echo "  compile         编译"
    echo "  recompile       重新编译"
    echo "  release         生成release包"
    echo "  start           启动服务器"
    echo "  stop            停止服务器"
    echo "  restart         重启节点"
    echo "  attach          连接到节点"
    echo "  sync            同步到外网服务器"
    echo "  console|shell   命令行启动服务器"
    echo "  cmd             直接把后面的命令传递给服务器启动脚本"
    echo "  tail            用tail查看日志"
    echo "  log|vim         用vim查看日志"
    echo "  err             用vim查看err日志"
    echo ""
    echo "选项:"
    echo "  -h, --help      显示本信息"
    echo ""
}


# parse command line parameters
while [ $# -ne 0 ] ; do
    PARAM=$1
    shift
    case ${PARAM} in
        --) break ;;
        --help|-h) fun_usage; exit 0;;
	    --reload|-r) RELOAD_TYPE=$1; shift;;
	    -i) ATTACH_ID=$1; shift;;
        *) ARGS="${ARGS} ${PARAM}" ;;
    esac
done

set -- ${ARGS}
ACTION=`echo $1 | tr -d '\040\011\012\015'`
shift
case ${ACTION} in
    '') fun_usage;;
    'help') fun_usage;;
    'clean') fun_clean;;
    'gen_conf') fun_gen_conf $1;;
    'config') fun_config;;
    'compile') fun_compile;;
    'recompile') fun_recompile;;
    'release') fun_release $1;;
    'start') fun_start $1;;
    'stop') fun_stop $1;;
    'restart') fun_restart $1;;
    'attach') fun_attach $1;;
    'sync') fun_sync $1;;
    'sync_4399') fun_sync_4399 $1;;
    'console') fun_console $1;;
    'shell') fun_console $1;;
    'cmd') fun_cmd $@;;
    'tail') fun_tail $@;;
    'vim') fun_vim $@;;
    'gvim') fun_gvim $@;;
    *) echo "参数错误！"; echo ${ACTION}; fun_usage; exit 1;;
esac
