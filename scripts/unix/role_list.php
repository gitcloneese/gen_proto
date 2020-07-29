<?php
/*=============================================================================
#FileName     : role_list.php
#Desc         : 根据账号查询角色列表
#Author       : LeiHua
#Email        : leihua918@sina.com
#LastChange   : 2016-05-13 20:14:56
#History      :
=============================================================================*/
define('SYS_PATH', dirname(__FILE__) . DIRECTORY_SEPARATOR);
include_once "common.inc.php";

header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
header('Cache-Control: no-store, no-cache, must-revalidate');
header('Cache-Control: post-check=0, pre-check=0', FALSE);
header('Pragma: no-cache');
header('Access-Control-Allow-Origin:*');

function array_to_lua_table($arr){
    $str = "";
    foreach($arr as $k => $v){
        if(is_int($k)){
            $key_str = "[$k]";
        }else{
            $key_str = $k;
        }

        if(is_array($v)){
            $value_str = array_to_lua_table($v);
        }else if(is_numeric($v)){
            $value_str = $v;
        }else{
            $value_str = '[[' . addslashes(trim($v)) . ']]';
        }
        $str = $str . $key_str . ' = ' . $value_str . ',';
    }
    return "{ $str }";
}

function response_role_list($error, $data_type = "lua", $data = "{}"){
    if($data_type == "lua"){
        $code = $error['code'];
        $msg  = $error['msg'];
        if(is_array($data)){
            $lua_str = array_to_lua_table($data);
        }else{
            $lua_str = "{}";
        }
        echo <<<ROLE_LIST
D = D or {}
D.account_info = $lua_str
D.account_info_error_code = $code
D.account_info_error_msg  = "$msg"
ROLE_LIST;
    }else{
        if(is_array($data)){
            $arr = $data;
        }else{
            $arr = array();
        }
        $rsp_data = array(
            'code' => $error['code'],
            'msg'  => $error['msg'],
            'role_list' => $arr
        );
        echo json_encode($rsp_data);
    }
    die("");
}


$platform  = $_GET['platform'];
if(!isset($platform)){
    $platform = 0;
}
$account   = $_GET['account'];
$auth_code = $_GET['auth_code'];
$data_type = $_GET['data_type'];

if(!isset($data_type)){
    $data_type = "json";
}

if(!isset($account) || !isset($auth_code)){
    response_role_list($error['invalid_param'], $data_type);
}

$account_prefix = array(
    1 => "4399_", // 4399ƽ̨
    );

if($config['need_auth']){
    $auth_str = $platform. $account . $config['game_client_key'];
    if(md5($auth_str) != $auth_code){
        response_role_list($error['auth_fail'], $data_type);
    }
}

try{
    $table_name = $config['table_name'];
    $db   = db($config['db']);
    $where= array('account' => $account_prefix[$platform].$account, 'platform' => $platform);
    $rows = $db->select($table_name, array(), $where);
    $data = array();
    foreach($rows as $k => $v){
        $server_id = $v['server_id'];
        $role_id   = $v['role_id'];
        $data[$server_id][$role_id] = $v;
    }
    response_role_list($error['success'], $data_type, $data);
}catch(Exception $ex){
    error_log($ex->getMessage());
    response_role_list($error['sys_error'], $data_type);
}

