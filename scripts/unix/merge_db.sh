#!/bin/bash

# 相关目录配置
ROOT_DIR=`cd $(dirname $0)/../; pwd`


ETC_DIR=${ROOT_DIR}/etc
EXPORT_DIR=${ROOT_DIR}/db/export

echo "${ROOT_DIR}"

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
query_mmo() { query_cfg $ETC_DIR/system.config $@; }
query_game() { query_cfg $ETC_DIR/game.config $@; }

DB_USER=$(query_mmo emysql pools default user)
DB_HOST=$(query_mmo emysql pools default host)
DB_PASS=$(query_mmo emysql pools default password)
GAME_DB=$(query_mmo emysql pools default database)
LOG_DB=$(query_mmo emysql pools log database)
SERVER_ID=$(query_game server_id)

TARGET_DB=game
TARGET_TYPE=
TARGET_GAME_FILES=
TARGET_LOG_FILES=

SKIP_TABS=(activity_rank_result block_info boss_drop boss_kill chat_offline db_version pt_acct_info update_annos role_invit_map seven_day_result)
LOG_TABS=(tbllog_gold tbllog_items tbllog_pay tbllog_player tbllog_role)

# 使用说明
usage ()
{
    echo ""
    echo "用法:"
    echo "$0 动作 [选项]"
    echo "动作:"
    echo "  export        导出数据"
    echo "  import        导入数据"
    echo ""
    echo "选项:"
    echo "  --help              显示本信息"
    echo "  -u                  数据库用户名称(如$DB_USER)"
    echo "  -h                  数据库地址(如$DB_HOST)"
    echo "  -p                  数据库密码"
    echo "  -i                  导入的数据库目录/目录压缩包"
    echo "  -gamedb             操作的game数据库"
    echo "  -logdb              操作的game数据库"
    echo "  -i1                 指定需要导入的game目录"
    echo "  -i2                 指定需要导入的game目录"
    echo "  -t                  game log all 要操作的库"
    echo ""
    echo "root path：$ROOT_DIR"
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
# 打印信息
show() {
    echo -e "\033[1;42m[操作]\033[0m(${TARGET_DB}=>${TARGET_TYPE})> $@"
}

get_time()
{
    echo `date +%s`
}


# 检测数据库是否存在
# 返回:0存在,1不存在
is_database_exist() {
    local TMPDB=$1
    EXIST=`echo "use information_schema;select 1 from schemata where schema_name = '${TMPDB}';" | mysql -h ${DB_HOST} -u ${DB_USER} -p"${DB_PASS}"`
    if [ "$EXIST" != "" ]; then
        return 0
    else
        return 1
    fi
}


# 建立数据库结构
create_db() {
    local TMPDB=$1
    local TMPSQL=$2
    mysql -u${DB_USER} -p"${DB_PASS}" << EOF
create database ${TMPDB};
use ${TMPDB};
source ${TMPSQL};
EOF
    if [ $? -ne 0 ]; then
        error "创建数据库失败"
    fi
}


show_tables(){
    local TMPDB=$1
    local TABS=`mysql -h${DB_HOST} -u${DB_USER} -p${DB_PASS} ${TMPDB} -e 'show tables'|awk '{print $1}'|grep -v '^Table'`
    echo ${TABS}
}

is_skip_tab(){
 local TMPTAB=$1
 local DBTYPE=$2
 local SKIP=false
 if [ $DBTYPE == "game"  ]; then

    for I in ${SKIP_TABS[@]} ; do
        [ "$I" == "$TMPTAB" ] && SKIP=true
    done

 elif [ $DBTYPE == "log"  ]; then
    SKIP=true
    for I in ${LOG_TABS[@]} ; do
        [ "$I" == "$TMPTAB" ] && SKIP=false
    done
 fi

 echo ${SKIP}
}

do_sql(){
    local TMPDB=$1
    local TMPSQL=$2
     mysql -u${DB_USER} -p"${DB_PASS}" << EOF
use ${TMPDB};
${TMPSQL}
EOF
    if [ $? -ne 0 ]; then
        error "执行${TMPSQL}失败"
    fi
    echo "执行${TMPSQL}成功"

}

do_export_db(){
    local TMPDB=$1
    local DBTYPE=$2
    local TMP_EXPORT=${EXPORT_DIR}/${TMPDB}
    local StartTime=$(get_time)
    local EndTime=
    echo "开始执行导入${TMPDB} ${TMP_EXPORT}"
    if is_database_exist $TMPDB; then
        echo "数据库${TMPDB}存在"
    else
        error "数据库${TMPDB}不存在"
    fi

    if ! mkdir -p ${TMP_EXPORT} 2> /dev/null; then
        error "创建恢复目录失败，检查权限"
    fi
    chmod 777 ${TMP_EXPORT}
    rm -rf ${TMP_EXPORT}/*

    show "导出${TMPDB}的表结构到${TMP_EXPORT}"

    if ! mysqldump -h ${DB_HOST} -u ${DB_USER} -p${DB_PASS}  -d ${TMPDB}  > ${TMP_EXPORT}/${TMPDB}_struct.sql; then
        error "导出${TMPDB}表结构失败"
    fi
    echo "导出${TMPDB}表结构成功!"
    local TABLES=$(show_tables ${TMPDB})
    local TMPSQL=""
    for T in ${TABLES}; do
        local ISSKIP=$(is_skip_tab $T $DBTYPE )
        if [ $ISSKIP == "true" ]; then
            echo "跳过${T}"
        elif [ $T == "global_data"  ]; then
            do_sql ${TMPDB} "select id+${SERVER_ID}*1000000,val from global_data into outfile '${TMP_EXPORT}/global_data.txt' fields terminated by \"\t\""
        elif [ $T == "rank"  ]; then
            do_sql ${TMPDB} "select id+${SERVER_ID}*1000000,rank_list,sort_by,capacity,len,show_top_n from rank into outfile '${TMP_EXPORT}/rank.txt' fields terminated by \"\t\""
        elif [ $T == "tbllog_gold"  ]; then
            do_sql ${TMPDB} "select platform,device,role_id,account_name,dim_level,dim_prof,money_type,amount,money_remain,item_id,opt,action_1,action_2,item_number,happend_time from tbllog_gold into outfile '${TMP_EXPORT}/tbllog_gold.txt' fields terminated by \"\t\""
        elif [ $T == "tbllog_items"  ]; then
            do_sql ${TMPDB} "select platform,device,role_id,account_name,dim_level,opt,action_id,item_id,item_number,map_id,happend_time from ${T} into outfile '${TMP_EXPORT}/${T}.txt' fields terminated by \"\t\""
        elif [ $T == "tbllog_pay"  ]; then
            do_sql ${TMPDB} "select platform,device,role_id,account_name,dim_level,order_id,pay_money,happend_time,log_time,user_ip,pay_type,pay_gold,pay_present_rid,did,game_version from ${T} into outfile '${TMP_EXPORT}/${T}.txt' fields terminated by \"\t\""
        elif [ $T == "tbllog_role"  ]; then
            do_sql ${TMPDB} "select platform,device,os,os_version,did,screen,mno,nm,role_id,role_name,account_name,user_ip,dim_prof,dim_sex,game_version,happend_time from ${T} into outfile '${TMP_EXPORT}/${T}.txt' fields terminated by \"\t\""
        else
            do_sql ${TMPDB} "select * from ${T} into outfile '${TMP_EXPORT}/${T}.txt' fields terminated by \"\t\""
        fi

    done
    echo "开始压缩文件"
    Tar=${EXPORT_DIR}/${TMPDB}.tar.gz
    rm -rf ${Tar}
    cd ${TMP_EXPORT} && (tar -czvf ../${TMPDB}.tar.gz ./*.sql ./*.txt)

    cd ${ROOT_DIR}/script
    rm -rf ${TMP_EXPORT}

    EndTime=$(get_time)
    let Dt=EndTime-StartTime
    show "导出${TMPDB}耗时${Dt}秒"


}


do_import_db(){
    local TMPDB=$1
    local TMPFILE=$2
    local IMPORT_DIR=
    local StartTime=$(get_time)
    local EndTime=


    #检测是否需要解压
    IMPORT_DIR=$(uncompress_db_dir ${TMPFILE})
    [ "${IMPORT_DIR}" = "" ] && error "${TMPFILE}无效"
    if [ -d ${IMPORT_DIR} ]; then
            do_import_db2 $TMPDB $IMPORT_DIR
    else
            error "数据库目录${IMPORT_DIR}不存在!"
    fi
    rm -rf ${IMPORT_DIR}
    EndTime=$(get_time)
    let Dt=EndTime-StartTime
    show "把${IMPORT_DIR}导入${TMPDB}耗时${Dt}秒"

}

do_import_db2() {
    local TMPDB=$1
    local IMPORT_DIR=$2

    local BASENAME=`basename ${IMPORT_DIR} .tar.gz`
    local STRUCTSQL=${IMPORT_DIR}/${BASENAME}_struct.sql
     #检测目标库是否存在
    if is_database_exist $TMPDB; then
        echo "数据库${TMPDB}存"
    else
        echo "数据库${TMPDB}不存在${STRUCTSQL} ${BASENAME}"
        create_db ${TMPDB} ${STRUCTSQL}
    fi

    local LOADDATA=`find ${IMPORT_DIR} -name "*.txt"`
    local TABLE=
    for D in ${LOADDATA}; do
        TABLE=`basename ${D} .txt`

        if [ $TABLE == "tbllog_gold"  ]; then
            echo "开始导入${TABLE}"
            do_sql ${TMPDB} "load data infile \"${D}\" into table ${TABLE} fields terminated by \"\t\" (platform,device,role_id,account_name,dim_level,dim_prof,money_type,amount,money_remain,item_id,opt,action_1,action_2,item_number,happend_time)"
        elif [ $TABLE == "tbllog_items"   ]; then
            echo "开始导入${TABLE}"
            do_sql ${TMPDB} "load data infile \"${D}\" into table ${TABLE} fields terminated by \"\t\" (platform,device,role_id,account_name,dim_level,opt,action_id,item_id,item_number,map_id,happend_time) "
        elif [ $TABLE == "tbllog_pay"   ]; then
            echo "开始导入${TABLE}"
            do_sql ${TMPDB} "load data infile \"${D}\" into table ${TABLE} fields terminated by \"\t\" (platform,device,role_id,account_name,dim_level,order_id,pay_money,happend_time,log_time,user_ip,pay_type,pay_gold,pay_present_rid,did,game_version) "
        elif [ $TABLE == "tbllog_role"   ]; then
            echo "开始导入${TABLE}"
            do_sql ${TMPDB} "load data infile \"${D}\" into table ${TABLE} fields terminated by \"\t\" (platform,device,os,os_version,did,screen,mno,nm,role_id,role_name,account_name,user_ip,dim_prof,dim_sex,game_version,happend_time) "
        else
            echo "开始导入${TABLE}"
            do_sql ${TMPDB} "load data infile \"${D}\" into table ${TABLE} fields terminated by \"\t\""
        fi


    done

}


# 解压DB_DIR到指定目录
uncompress_db_dir() {
    local COMPRESS_DB_FILE=$1
    if [ -f "${COMPRESS_DB_FILE}" ]; then
        local BASENAME=`basename ${COMPRESS_DB_FILE} .tar.gz`
        local TAR_DIR=${EXPORT_DIR}/${BASENAME}

        if ! mkdir -p ${TAR_DIR} 2> /dev/null; then
            error "创建恢复目录失败，检查权限"
        fi

        rm -rf ${TAR_DIR}/*.txt
        rm -rf ${TAR_DIR}/*.sql

        if !(tar xzf ${COMPRESS_DB_FILE} -C ${TAR_DIR}); then
            error "解压db压缩文件包出错!"
        fi
        echo ${TAR_DIR}
    elif [ -d "${COMPRESS_DB_FILE}" ]; then
        echo ${COMPRESS_DB_FILE}
    fi
}


export_db(){
    TARGET_TYPE=export_db
    if [ $TARGET_DB == "game" ]; then
        do_export_db ${GAME_DB} "game"
    elif [ $TARGET_DB == "log" ]; then
        do_export_db ${LOG_DB} "log"
    elif [ $TARGET_DB == "all" ]; then
        do_export_db ${GAME_DB} "game"
        do_export_db ${LOG_DB} "log"
    fi

}

import_db(){
    TARGET_TYPE=import_db
    if [ $TARGET_DB == "game" ]; then
        [ "${TARGET_GAME_FILES}" = "" ] && error "没有指定game导入的目录"
        do_import_db ${GAME_DB} ${TARGET_GAME_FILES}
    elif [ $TARGET_DB == "log" ]; then
        [ "${TARGET_LOG_FILES}" = "" ] && error "没有指定log导入的目录"
        do_import_db ${LOG_DB} ${TARGET_LOG_FILES}
    elif [ $TARGET_DB == "all" ]; then
        [ "${TARGET_GAME_FILES}" = "" ] && error "没有指定game导入的目录"
        [ "${TARGET_LOG_FILES}" = "" ] && error "没有指定log导入的目录"
        do_import_db ${GAME_DB} ${TARGET_GAME_FILES}
        do_import_db ${LOG_DB} ${TARGET_LOG_FILES}
    fi
}

#
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
        -gamedb) GAME_DB=$1; shift;;
        -logdb) LOG_DB=$1; shift;;
        --serverod|-s) SERVER_ID=$1; shift;;
        --target|-t) TARGET_DB=$1; shift;;
        --importfile1|-i1) TARGET_GAME_FILES=$1; shift;;
        --importfile2|-i2) TARGET_LOG_FILES=$1; shift;;
        *) ARGS="$ARGS $PARAM" ;;
    esac
done


set -- $ARGS
ACTION=$1
shift
case ${ACTION} in
    '') usage;;
    'export') export_db;;
    'import') import_db;;
    *) warn "参数错误！"; usage; exit 1;;
esac
