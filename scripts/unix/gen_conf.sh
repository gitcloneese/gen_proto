#!/bin/bash

ROOT=`cd $(dirname $0);cd ../../;pwd`
if [ -d ${ROOT} ]; then
    cd ${ROOT}
fi

echo "root 路径${ROOT}"


CTL_CONFIG="${ROOT}/etc/etc.conf"
if [ ${1} != "" ]; then
    CTL_CONFIG="${ROOT}/etc/etc.${1}.conf"
fi

echo ${CTL_CONFIG}
source ${CTL_CONFIG}

GAMETPL="${ROOT}/config/game.config"
VMTPL="${ROOT}/config/vm.args"
SYSTEMCONF="${ROOT}/config/sys.config"
ISINTER=false

if [ ${SERVER} == 'mmo' ]; then
  echo "生成游戏服配置"
  NODENAME=${SERVER}_dev_s${SERVER_ID}
elif [ ${SERVER} == 'mmo_inter' ]; then
  echo "生成游戏服配置"
  ISINTER=true
  SERVER_ID=0
  NODENAME=${SERVER}_dev
else 
  echo "游戏服类型异常,请配置mmo|mmo_inter"
  exit 1  
fi


gen_vm()
{
  cat > ${VMTPL} << EOF
-setcookie ${CONNECT_COOKIE}
+K true
+A30
-name ${NODENAME}@${LOCAL_IP}
-env ERL_MAX_ETS_TABLES ${ERL_MAX_ETS_TABLES}
-env ERL_MAX_PROCESSES ${ERL_MAX_PROCESSES}
-env ERL_MAX_PORTS ${ERL_MAX_PORTS}
-env CONNECT_ALL ${CONNECT_ALL}
EOF
}

gen_system_config()
{

local LOGPOOL=""
if [ "$ISINTER" = "false"  ]; then
  LOGPOOL=",{log, [
            {size, ${LOG_DB_POOL_SIZE}},
            {user, \"${LOG_DB_POOL_USER}\"},
            {password, \"${LOG_DB_POOL_PW}\"},
            {host, \"${LOG_DB_POOL_HOST}\"},
            {port, ${LOG_DB_POOL_PORT}},
            {database, \"${LOG_DB_POOL_DATABASE}\"},
            {encoding, '${LOG_DB_POOL_ENCODE}'}
        ]}"
fi

#      {lager_file_backend,
#        [
#          {file, "chat.log"}, {level, warning}, {size, 10240000000}, {date, "$D0"}, {count, 2},
#          {formatter_config,
#            [
#              date," ",time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
#              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
#              {line, [":",line], ""}], ""}, " ", message, "\n"
#            ]
#          }
#        ]
#      },
#      {lager_file_backend,
#        [
#          {file, "debug_vv.log"}, {level, debug}, {size, 10485760}, {date, "$D0"}, {count, 10},
#          {formatter_config,
#            [
#              date," ",time," [",severity,"] [", {pid, ""}, "@", {id, "none"},
#              "] [", module, ":", function, ":", line, "] ", message, "\n"
#            ]
#          }
#        ]
#      },
#      {lager_file_backend,
#        [
#          {file, "debug.log"}, {level, info}, {size, 10485760}, {date, "$D0"}, {count, 10},
#          {formatter_config,
#            [
#              date," ",time," [",severity,"] [", {pid, ""}, "@", {id, "none"},
#              "] [", module, ":", function, ":", line, "] ", message, "\n"
#            ]
#          }
#        ]
#      },
#      {lager_file_backend,
#        [
#          {file, "info.log"}, {level, notice}, {size, 10485760}, {date, "$D0"}, {count, 100},
#          {formatter_config,
#            [
#              date," ",time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
#              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
#              {line, [":",line], ""}], ""}, " ", message, "\n"
#            ]
#          }
#        ]
#      },
cat > ${SYSTEMCONF} << EOF
%% 系统app配置
[

%%数据库驱动配置
{emysql, [
    {default_timeout, 15000},
    {retry_when_closed, true},
    {lock_timeout, 30000},
    {pools, [
        {default, [
            {size, ${GAME_DB_POOL_SIZE}},
            {user, "${GAME_DB_POOL_USER}"},
            {password, "${GAME_DB_POOL_PW}"},
            {host, "${GAME_DB_POOL_HOST}"},
            {port, ${GAME_DB_POOL_PORT}},
            {database, "${GAME_DB_POOL_DATABASE}"},
            {encoding, '${GAME_DB_POOL_ENCODE}'}
        ]}
        ${LOGPOOL}
    ]}
]},

%%web服务配置(管理后台)
{mmo_admin, [
    {web_port, ${WEB_LISTEN_PORT}}
]},

% mmo 服务配置
{mmo, [
  {game_config,[
      %%关联的服务器配置
      %%账号服务器配置
      {account_server_host,"${ACCOUNT_SERVER_HOST}"},
      {account_server_port,${ACCOUNT_SERVER_PORT}},
      {account_server_key,"${ACCOUNT_SERVER_KEY}"},


      %%聊天监控服务器配置
      {chat_monitor_host, "${CHAT_SERVER_HOST}"},
      {chat_monitor_port, ${CHAT_SERVER_PORT}},

      %%游戏服配置
      {charge_notify_url, "${CHARGE_NOTIFY_URL}"},
      {bizpay_notify_register, "${BIZPAY_NOTIFY_REGISTER}"},
      {tcp_listen_addr, "${LISTEN_IP}"},
      {tcp_listen_port, ${LISTEN_PORT}},
      {tcp_accepter_count, ${TCP_ACCEPTOR_COUNT}},
      {inter_node, '${INTER_NODE}'},
      {open_server_time, ${SERVER_OPEN_TIME}},
      {active_server, ${ACTIVE_SERVER}},
      {platform_id, ${PLATFORM}},
      {server_id, ${SERVER_ID}},
      {inter_flag,${ISINTER}},
      {sandbox,${SANDBOX}},
      {gift_code_time, ${GIFT_CODE_TIME}},
      {is_local_dev, ${IS_LOCAL_DEV}},

      %%客户端充值
      {client_pay_key , "${CLIENT_PAY_KEY}"},

      %%调试相关
      %%GM指令开关
      {gm_flag,${GM_FLAG}},
      {print_recv_proto_data, ${PRINT_RECV_PROTO_DATA} },
      {print_send_proto_data, ${PRINT_SEND_PROTO_DATA} }
    ]}
]},

{kernel, 
    [{inet_dist_listen_min, ${INET_DIST_LISTEN_MIN}},{inet_dist_listen_max, ${INET_DIST_LISTEN_MAX}}]
},

{robot,[
      {account_server_host,"${ACCOUNT_SERVER_HOST}"},
      {account_server_port,${ACCOUNT_SERVER_PORT}},
      {account_server_key,"${ACCOUNT_SERVER_KEY}"},
    {server_ip, "localhost"},
    {server_port, ${LISTEN_PORT}},
    {server_id, ${SERVER_ID}},
    {platform, ${PLATFORM}}
]},

%% 日志配置
{lager, [
              %% 过载保护, 邮箱中超过20条堆积转为同步模式, 小于15条时转回异步
            { async_threshold, 20 },
            { async_threshold_window, 5 },
  {suppress_application_start_stop, true},
  {suppress_supervisor_start_stop, true},
  {log_root, "log/"},
  {handlers, 
    [
      {lager_file_backend,
        [
          {file, "chat.log"}, {level, warning}, {size, 10240000000}, {date, "$D0"}, {count, 2},
          {formatter_config,
            [
              date," ",time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
              {line, [":",line], ""}], ""}, " ", message, "\n"
            ]
          }
        ]
      },
      {lager_file_backend,
        [
          {file, "debug_vv.log"}, {level, debug}, {size, 10485760}, {date, "$D0"}, {count, 10},
          {formatter_config,
            [
              date," ",time," [",i_level,"] [", {pid, ""}, "@", {id, "none"},
              "] [", module, ":", function, ":", line, "] ", message, "\n"
            ]
          }
        ]
      },
      {lager_file_backend,
        [
          {file, "debug.log"}, {level, info}, {size, 10485760}, {date, "$D0"}, {count, 10},
          {formatter_config,
            [
              date," ",time," [",severity,"] [", {pid, ""}, "@", {id, "none"},
              "] [", module, ":", function, ":", line, "] ", message, "\n"
            ]
          },
            %% 消息队列长度超过1000 开始丢消息
          { flush_queue, true },
          { flush_threshold, 1000 }
        ]
      },
      {lager_file_backend,
        [
          {file, "info.log"}, {level, notice}, {size, 10485760}, {date, "$D0"}, {count, 100},
          {formatter_config,
            [
              date," ",time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
              {line, [":",line], ""}], ""}, " ", message, "\n"
            ]
          },
            %% 消息队列长度超过1000 开始丢消息
          { flush_queue, true },
          { flush_threshold, 1000 }
        ]
      },
      {lager_console_backend,
        [
          {level, error},
          {formatter_config,
            [
              time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
              {line, [":",line], ""}], ""}, " ", message, "\n"
            ]
          }
        ]
      },
      {lager_file_backend,
        [
          {file, "error.log"}, {level, error}, {size, 10485760}, {date, "$D0"}, {count, 10},
          {formatter_config,
            [
              date," ",time," [",severity,"] ", "[", {id, "none"}, "] ", {pid, ""},
              {module, [{pid, ["@"], ""}, module, {function, [":", function], ""},
              {line, [":",line], ""}], ""}, " ", message, "\n"
            ]
          }
        ]
      }
    ]
  },
  %% Whether to write a crash log, and where. Undefined means no crash logger.
  {crash_log, "crash.log"},
  %% Maximum size in bytes of events in the crash log - defaults to 65536
  {crash_log_msg_size, 65536},
  %% Maximum size of the crash log in bytes, before its rotated, set
  %% to 0 to disable rotation - default is 0
  {crash_log_size, 10485760},
  %% What time to rotate the crash log - default is no time
  %% rotation. See the README for a description of this format.
  {crash_log_date, "$D0"},
  %% Number of rotated crash logs to keep, 0 means keep only the
  %% current one - default is 0
  {crash_log_count, 5},
  %% Whether to redirect error_logger messages into lager - defaults to true
  {error_logger_redirect, true}
]}

].
EOF

}



gen_game_config()
{
cat > ${GAMETPL} << EOF



EOF
}

gen_inter_game_config()
{

cat > ${GAMETPL} << EOF
%%关联的服务器配置
%%账号服务器配置
{account_server_host,"${ACCOUNT_SERVER_HOST}"}.
{account_server_port,${ACCOUNT_SERVER_PORT}}.
{account_server_key,"${ACCOUNT_SERVER_KEY}"}.

%%聊天监控服务器配置
{chat_monitor_host, "${CHAT_SERVER_HOST}"}.
{chat_monitor_port, ${CHAT_SERVER_PORT}}.

%%游戏服配置
{inter_flag,${ISINTER}}.
EOF
}



gen_vm
gen_system_config

if [ $SERVER == 'mmo' ]; then
  gen_game_config
elif [ $SERVER == 'mmo_inter' ]; then
  gen_inter_game_config
else 
  echo "游戏服类型异常,请配置mmo|mmo_inter"
  exit 1  
fi








