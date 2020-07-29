#!/bin/bash

# 相关目录配置
ROOT_DIR=`cd $(dirname $0)/../../; pwd`
CONFIG_DIR=$ROOT_DIR/etc
SQL_DIR=$ROOT_DIR/sql
DATA_DIR=$ROOT_DIR/db
BACKUP_DIR=${DATA_DIR}/backup
RECOVER_DIR=${DATA_DIR}/recover

# 获取conf中某个配置
query_cfg() {
    local cfg=$1
    shift
    pattern=''
    for i in $@; do
        pattern=$pattern"\{$i\s?,.*?"
    done
    pattern=$pattern"\K[^\r]+\}"
    echo $(tr '\n' '\r' < $cfg | grep -oP $pattern | sed 's/\}$//' | xargs)
}
query_mmo() { query_cfg $CONFIG_DIR/sys.config $@; }
query_game() { query_cfg $CONFIG_DIR/game.config $@; }


# 配置的默认值
SHOW_VERIFY=true
DELETE_DB_VERSION=false
INCLUDE_LOG_DB=false

DB_USER=$(query_mmo emysql pools default user)
DB_HOST=$(query_mmo emysql pools default host)
DB_PASS=$(query_mmo emysql pools default password)
SERVER_ID=$(query_game server_id)

GAME_DB=$(query_mmo emysql pools default database)
LOG_DB=$(query_mmo emysql pools log database)
DB_NAME=$GAME_DB


# 使用说明
usage ()
{
    echo ""
    echo "用法:"
    echo "$0 动作 [选项]"
    echo "动作:"
    echo "  init        初始化数据库"
    echo "  init_inter        初始化数据库"
    echo "  clear       清档"
    echo "  backup      备份"
    echo "  import      从备份恢复"
    echo ""
    echo "选项:"
    echo "  --help              显示本信息"
    echo "  -u                  数据库用户名称(如$DB_USER)"
    echo "  -h                  数据库地址(如$DB_HOST)"
    echo "  -p                  数据库密码"
    echo "  -d                  删除db_version表(默认不是删除)"
    echo "  -a                  操作log库(默认不操作)"
    echo "  -f                  导入的数据库文件"
    echo "  -i                  导入的数据库目录/目录压缩包"
    echo "  --database          操作的数据库(默认game库)"
    echo "  -q, --quiet         执行操作时不显示交互确认"
    echo ""
    echo "当前服信息："
    echo "server id:    $SERVER_ID"
    echo "game db:      $GAME_DB"
    echo "log db:       $LOG_DB"
    echo "db user:      $DB_USER"
    echo "db host:      $DB_HOST"
    echo "db pass:      $DB_PASS"
}

# 打印错误
error() {
    echo -e "[1;41m[错误][0m> $@"
    exit 1
}

# 提示确认信息
show_verify() {
    local DB=$1
    # if [ "$SHOW_VERIFY" = "true" ]; then
    #     echo -n "请确认要对$DB执行$ACTION操作?(yes/no):"
    #     read option
    #     case $option in
    #         "yes");;
    #         "y");;
    #         *)exit 1;;
    #     esac
    # fi
    echo "对$DB执行$ACTION操作"
}

clear_db() {
    # 清除数据库
    if [ "$DELETE_DB_VERSION" = "false" ]; then
        DB_TABLE_SKIP=$DB_TABLE_SKIP" db_version"
    fi
    DB_TABLE_SKIP=$DB_TABLE_SKIP" $SKIP_TABLE"

    do_clear_db $DB_NAME $DB_TABLE_SKIP
    do_clear_center

    if [ "$INCLUDE_LOG_DB" = "true" ]; then
        DB_NAME=$LOG_DB
        do_clear_db $DB_NAME $DB_TABLE_SKIP
    fi    
}

# 清理数据库
# 参数1为数据库名字
# 参数2为过滤的数据表列表
do_clear_db() {
    local DB=$1
    shift
    local TABLE_SKIP=$@
    echo "${DB}跳过表: ${TABLE_SKIP}"
    TABLE_ALL=$(do_sql "SHOW TABLES" $DB)

    TABLE_DELETE=
    for T in ${TABLE_ALL}; do
        TABLE_SKIP_2=${TABLE_SKIP/${T}/}
        if [ "${TABLE_SKIP}" = "${TABLE_SKIP_2}" ]; then
            TABLE_DELETE="${TABLE_DELETE} ${T}"
        fi
    done
    echo "${DB}删除表:${TABLE_DELETE}"

    show_verify $DB

    get_rows_num $DB
    SQL=$(gen_sql ${TABLE_DELETE})
    if ! $(do_sql "$SQL" $DB); then
        error "删除数据库失败!"
    fi
    show_rows_num $DB
    echo "======================================="
    echo "${DB}清理成功!"
    echo ""
}

# 清除中心服数据
do_clear_center() {
    ACCOUNT_HOST=$(query_game account_server_host)
    ACCOUNT_PORT=$(query_game account_server_port)
    ACCOUNT_KEY=$(query_game account_server_key)
    ACCOUNT_SERVER="${ACCOUNT_HOST}:${ACCOUNT_PORT}"
    AUTH_STR="${SERVER_ID}${ACCOUNT_KEY}salt"
    AUTH_CODE=`echo -n ${AUTH_STR} | md5sum | cut -d ' ' -f1`
    URL="http://${ACCOUNT_SERVER}/role_delete.php?server_id=${SERVER_ID}&auth_code=${AUTH_CODE}"
    echo "清理中心服 ... "
    curl ${URL}
    echo
}

# 生成删除sql语句
gen_sql() {
    local SQL=
    for TAB in $@
    do
        #SQL="${SQL}DELETE FROM \`${TAB}\`;"
        SQL="${SQL}TRUNCATE TABLE \`${TAB}\`;"
    done
    echo ${SQL}
}

do_sql() {
    local SQL=$1
    local DB=$2
    echo ${SQL} | mysql -h ${DB_HOST} -u ${DB_USER} -p"${DB_PASS}" -N -D${DB}
}

declare -A tab_rows
# 显示数据库中的行数
show_rows_num() {
    local DB=$1
    echo "======================================="
    echo " 当前数据库${DB}中表的行数 "
    echo "======================================="
    SQL="SELECT TABLE_NAME, TABLE_ROWS from TABLES where TABLE_SCHEMA='${DB}';"
    do_sql "$SQL" INFORMATION_SCHEMA |
    while read LINE; do
        tab=$(echo $LINE | awk '{print $1}')
        echo $LINE | awk '{printf "%-28s%6s -> %s\n", $1, rows, $2}' rows="${tab_rows[$tab]}"
    done
}

get_rows_num() {
    local DB=$1
    SQL="SELECT TABLE_NAME, TABLE_ROWS from TABLES where TABLE_SCHEMA='${DB}';"
    RET=$(do_sql "$SQL" INFORMATION_SCHEMA)
    OLD_IFS="$IFS"
    IFS=$'\n'
    tab_rows=()
    for LINE in $RET; do
        tab=$(echo $LINE | awk '{print $1}')
        rows=$(echo $LINE | awk '{print $2}')
        tab_rows[$tab]=$rows
    done
    IFS="$OLD_IFS"
}

# 备份本地数据库
backup_db() {
    local DB=$1
    local DB_BACKUP=${DB}`date +'_%Y%m%d%H%M'`.dump
    if ! (mkdir -p ${BACKUP_DIR} 2> /dev/null); then
        error "创建备份目录失败，检查权限"
    fi
    if id admin 2> /dev/null ; then
        if !(chown -R admin:admin ${BACKUP_DIR}); then
            error "修改备份目录权限失败!"
        fi
    fi

    show_verify $DB
    echo "备份$DB 到 ${BACKUP_DIR}/${DB_BACKUP} ... "
    if ! mysqldump -h ${DB_HOST} -u ${DB_USER} -p${DB_PASS} ${DB} > ${BACKUP_DIR}/${DB_BACKUP}; then
        error "失败"
    fi
    echo "备份成功!"
}

import_db() {
    if [ -n "$DB_FILE" ] && [ -f $DB_FILE ]; then
        import_file $DB_FILE $DB_NAME
    elif [ -n "$DB_DIR" ]; then
        echo "解压文件${DB_DIR} ..."
        DB_DIR=$(uncompress_db_dir ${DB_DIR})
        if [ -d ${DB_DIR} ]; then
            import_dir $DB_DIR $DB_NAME
            rm -rf ${DB_DIR}
        else
            error "数据库目录${DB_DIR}不存在!"
        fi
    else
        error "数据库文件或数据库目录不存在!"
    fi
}

# 导入数据库(单文件)
import_file() {
    local DB_FILE=$1
    local DB=$2
    DB_FILENAME=`basename ${DB_FILE}`
    if [ -z "$DB" ]; then
        DB=${DB_FILENAME%%_back*}
    fi
    
    show_verify $DB
    echo "导入$DB_FILE到$DB ... "
    do_sql2 $DB $DB_FILE
    if [ $? -ne 0 ]; then
        error "导入数据库失败"
    fi
    echo "导入成功!"
}


# 导入数据库(目录)
import_dir() {
    local DB_DIR=$1
    local DB=$2
    if [ -z "$DB" ]; then
        error "请指定数据库名称! --database "
    fi
    
    show_verify $DB
    echo "导入$DB_DIR到$DB ... "
    DB_STRUCT_SQL=`find ${DB_DIR} -name "*_db_struc.sql"`
    do_sql2 $DB $DB_STRUCT_SQL
    if [ $? -ne 0 ]; then
        error "导入创建数据库失败"
    fi
    echo "导入数据库 ..."
    DB_DATA_TXT=`find ${DB_DIR} -name "*.txt"`
    [ "${SHOW_VERBOSE}" = "false" ] && SILENT=" -s "
    if ! mysqlimport ${SILENT} -h ${DB_HOST} -u ${DB_USER} -p"${DB_PASS}" --local ${DB} ${DB_DATA_TXT}; then
        error "导入数据失败!"
    fi
    echo "导入成功!"
}

# 解压DB_DIR到指定目录
uncompress_db_dir() {
    if ! mkdir -p ${RECOVER_DIR} 2> /dev/null; then
        error "创建恢复目录失败，检查权限"
    fi

    local COMPRESS_DB_FILE=$1
    if [ -f "${COMPRESS_DB_FILE}" ]; then
        BASENAME=`basename ${COMPRESS_DB_FILE} .tar.gz`
        SUB_DB_DIR=`echo ${BASENAME} | cut -d% -f 4`-`echo ${BASENAME} | cut -d% -f 5`
        TAR_FILE_DIR=${RECOVER_DIR}
        DB_DIR=${TAR_FILE_DIR}/${SUB_DB_DIR}
        if !(tar xzf ${COMPRESS_DB_FILE} -C ${RECOVER_DIR}); then
            error "解压db压缩文件包出错!"
        fi
        echo ${DB_DIR}
    elif [ -d "${COMPRESS_DB_FILE}" ]; then
        echo ${COMPRESS_DB_FILE}
    fi
}


# 检测某个数据库是否存在
# 返回:0存在,1不存在
is_database_exist() {
    local TMPDB=$1
    EXIST=`echo "use information_schema;select 1 from schemata where schema_name = '${TMPDB}';" | mysql -u ${DB_USER} -p"${DB_PASS}"`
    if [ "$EXIST" != "" ]; then
        return 0
    else
        return 1
    fi
}

# 建立数据库结构
create_db() {
    local TMPDB=$1
    mysql -u${DB_USER} -p"${DB_PASS}" << EOF
create database ${TMPDB};
EOF
    if [ $? -ne 0 ]; then
        error "创建数据库失败"
        exit 1
    fi
}

#如果数据库不存在则创建
checkdb_and_create(){
    local TMPDB=$1
    if is_database_exist $TMPDB; then
        echo "数据库${TMPDB}存"
    else
        echo "数据库${TMPDB}不存在"  
        create_db ${TMPDB}
    fi
}

init_db() {
    show_verify "$GAME_DB"
    #do_sql2 $GAME_DB
    
    checkdb_and_create $GAME_DB
    checkdb_and_create $LOG_DB
    echo "$GAME_DB初始化中 ... "
    python db_update/db_update.py game -g -s
    if [ $? -ne 0 ]; then
        error "初始化$GAME_DB失败"
    fi    
    echo "初始化$GAME_DB完毕"

    if [ "$INCLUDE_LOG_DB" = "true" ]; then
        show_verify "$LOG_DB"
        #do_sql2 $LOG_DB

        echo "$LOG_DB初始化中 ... "
        python db_update/db_update.py log -g -s
        if [ $? -ne 0 ]; then
            error "初始化$LOG_DB失败"
        fi        
        echo "初始化$LOG_DB完毕"
    fi
}

init_inter_db(){
    local TMPDBSQL=$SQL_DIR/db_inter.sql
    if is_database_exist $GAME_DB; then
        echo "数据库${GAME_DB}存在"
    else
        echo "数据库${GAME_DB}不存在"  
        mysql -u${DB_USER} -p"${DB_PASS}" << EOF
create database ${GAME_DB};
use ${GAME_DB};
source ${TMPDBSQL};
EOF
    if [ $? -ne 0 ]; then
        error "创建数据库失败"
        exit 1
    fi
    fi
}

do_sql2() {
    local DB=$1
    local DO_FILE=$2
    local DO_SOURCE=""
    if [ -n "${DO_FILE}" ]; then
        DO_SOURCE="source ${DO_FILE};"
    fi
    mysql -h ${DB_HOST} -u ${DB_USER} -p"${DB_PASS}" << EOF
drop database if exists ${DB};
create database ${DB};
use ${DB};
${DO_SOURCE}
EOF
}

update_db(){
    python ./db_update/db_update.py game -g -s -p

    if [ "$INCLUDE_LOG_DB" = "true" ]; then
        python ./db_update/db_update.py log -g -s
    fi
    
}

# parse command line parameters
while [ $# -ne 0 ] ; do
    PARAM=$1
    shift
    case $PARAM in
        --) break ;;
        --quit|-q) SHOW_VERIFY=false;;
        --help) usage; exit 0;;
        -u) DB_USER=$1; shift;;
        -h) DB_HOST=$1; shift;;
        -p) DB_PASS=$1; shift;;
        -s) SKIP_TABLE=$1; shift;;
        -d) DELETE_DB_VERSION=true;;
        -a) INCLUDE_LOG_DB=true;;
        -f) DB_FILE=$1; shift;;
        -i) DB_DIR=$1; shift;;
        -v) SHOW_VERBOSE=true;;
        --database) DB_NAME=$1; shift;;
        *) ARGS="$ARGS $PARAM" ;;
    esac
done

set -- $ARGS
ACTION=$1
shift
case ${ACTION} in
    '') usage;;
    'init') init_db;;
    'init_inter') init_inter_db;;
    'clear') clear_db;;
    'backup') backup_db $DB_NAME;;
    'import') import_db;;
    'update') update_db;;
    *) warn "参数错误！"; usage; exit 1;;
esac

