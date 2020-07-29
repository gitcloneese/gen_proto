/*
 Navicat Premium Data Transfer

 Source Server         : root@192.168.0.12
 Source Server Type    : MariaDB
 Source Server Version : 100313
 Source Host           : 192.168.0.12:3306
 Source Schema         : dev_log

 Target Server Type    : MariaDB
 Target Server Version : 100313
 File Encoding         : 65001

 Date: 09/01/2020 15:26:28
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for db_version
-- ----------------------------
DROP TABLE IF EXISTS `db_version`;
CREATE TABLE `db_version` (
  `version` varchar(32) NOT NULL COMMENT '版本(YYYYMMDDNN)',
  PRIMARY KEY (`version`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='当前数据库版本，更新数据库时使用';

-- ----------------------------
-- Table structure for dict_action
-- ----------------------------
DROP TABLE IF EXISTS `dict_action`;
CREATE TABLE `dict_action` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_id` int(11) DEFAULT NULL,
  `action_name` varchar(255) DEFAULT NULL,
  `action_type_id` int(11) DEFAULT NULL,
  `level_req` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1221 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_action_type
-- ----------------------------
DROP TABLE IF EXISTS `dict_action_type`;
CREATE TABLE `dict_action_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_type_id` int(11) DEFAULT NULL,
  `action_type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_chat_channel
-- ----------------------------
DROP TABLE IF EXISTS `dict_chat_channel`;
CREATE TABLE `dict_chat_channel` (
  `channel_id` int(11) NOT NULL,
  `channel_name` varchar(1024) DEFAULT NULL,
  PRIMARY KEY (`channel_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='聊天频道字典表';

-- ----------------------------
-- Table structure for dict_color
-- ----------------------------
DROP TABLE IF EXISTS `dict_color`;
CREATE TABLE `dict_color` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color_id` int(11) DEFAULT NULL,
  `color_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_item
-- ----------------------------
DROP TABLE IF EXISTS `dict_item`;
CREATE TABLE `dict_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item_id` int(11) DEFAULT NULL,
  `item_name` varchar(255) DEFAULT NULL,
  `quality` int(11) DEFAULT NULL,
  `level_req` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3461 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_link_step
-- ----------------------------
DROP TABLE IF EXISTS `dict_link_step`;
CREATE TABLE `dict_link_step` (
  `order_id` int(11) NOT NULL,
  `step_id` int(11) DEFAULT NULL,
  `next_step_id` int(11) DEFAULT NULL,
  `step_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_prof
-- ----------------------------
DROP TABLE IF EXISTS `dict_prof`;
CREATE TABLE `dict_prof` (
  `prof_id` int(11) NOT NULL,
  `prof_name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`prof_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_reason
-- ----------------------------
DROP TABLE IF EXISTS `dict_reason`;
CREATE TABLE `dict_reason` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `reason_id` int(11) DEFAULT NULL,
  `msg` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_shop_type
-- ----------------------------
DROP TABLE IF EXISTS `dict_shop_type`;
CREATE TABLE `dict_shop_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shop_type_id` tinyint(3) DEFAULT NULL,
  `shop_type_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for dict_value_type
-- ----------------------------
DROP TABLE IF EXISTS `dict_value_type`;
CREATE TABLE `dict_value_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `value_type_id` tinyint(8) DEFAULT NULL,
  `value_type_name` varchar(255) DEFAULT NULL,
  `oss_show` tinyint(8) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_attachment
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_attachment`;
CREATE TABLE `tbllog_attachment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `mail_id` bigint(20) DEFAULT NULL,
  `mail_receiver_id` bigint(20) DEFAULT NULL,
  `attachment` varchar(500) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `log_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_log_time` (`log_time`)
) ENGINE=InnoDB AUTO_INCREMENT=76 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_boss
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_boss`;
CREATE TABLE `tbllog_boss` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT '' COMMENT '设备端 android, ios, web, pc',
  `role_id` bigint(1) DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(255) DEFAULT '' COMMENT '平台账号',
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `dim_power` int(11) DEFAULT 0 COMMENT '战斗力',
  `instance_id` int(11) DEFAULT 0 COMMENT '副本ID',
  `monster_id` int(11) DEFAULT 0 COMMENT '击杀怪物ID',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=171 DEFAULT CHARSET=utf8 COMMENT='BOSS击杀日志';

-- ----------------------------
-- Table structure for tbllog_change_name
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_change_name`;
CREATE TABLE `tbllog_change_name` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happened_time` int(11) DEFAULT NULL,
  `changed_names` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_chat
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_chat`;
CREATE TABLE `tbllog_chat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT '设备端 android|ios|web|pc',
  `account_name` varchar(50) DEFAULT NULL COMMENT '账号名',
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色id',
  `role_name` varchar(50) DEFAULT NULL COMMENT '角色名',
  `dim_level` int(11) DEFAULT NULL COMMENT '角色等级',
  `user_ip` varchar(50) DEFAULT NULL COMMENT '用户ip',
  `channel` int(11) NOT NULL DEFAULT 0 COMMENT '聊天频道',
  `msg` varchar(1024) DEFAULT NULL COMMENT '聊天内容',
  `type` int(11) NOT NULL DEFAULT 0 COMMENT '聊天内容类型, 0语音, 1文本',
  `target_role_id` bigint(20) DEFAULT NULL COMMENT '聊天对象id',
  `happend_time` int(11) DEFAULT NULL COMMENT '聊天发生时间',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8 COMMENT='聊天日志表';

-- ----------------------------
-- Table structure for tbllog_complaints
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_complaints`;
CREATE TABLE `tbllog_complaints` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `complaint_type` int(11) DEFAULT NULL,
  `complaint_title` varchar(50) DEFAULT NULL,
  `complaint_content` varchar(200) DEFAULT NULL,
  `complaint_time` int(11) DEFAULT NULL,
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`complaint_id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_crazy_activity
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_crazy_activity`;
CREATE TABLE `tbllog_crazy_activity` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL DEFAULT 0,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `account_name` varchar(50) DEFAULT NULL,
  `activity_type` int(11) NOT NULL DEFAULT 0 COMMENT '活动类型',
  `event_type` int(11) NOT NULL DEFAULT 0 COMMENT '事件类型',
  `data_id` int(11) NOT NULL DEFAULT 0 COMMENT '道具id/副本类型',
  `data_num` int(11) NOT NULL DEFAULT 0 COMMENT '数量/次数',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_deal
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_deal`;
CREATE TABLE `tbllog_deal` (
  `deal_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '订单id',
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `account_name` varchar(50) DEFAULT NULL,
  `role_id` int(11) NOT NULL DEFAULT 0,
  `owner_id` bigint(11) NOT NULL DEFAULT 0 COMMENT '拥有者id',
  `item_id` int(11) NOT NULL DEFAULT 0 COMMENT '物品id',
  `item_number` int(11) NOT NULL DEFAULT 0 COMMENT '数量',
  `owner_item_id` int(11) NOT NULL DEFAULT 0 COMMENT '物品id',
  `owner_item_number` int(11) NOT NULL DEFAULT 0 COMMENT '物品id',
  `item_uniq_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '物品唯一id',
  `status` smallint(3) NOT NULL DEFAULT 0 COMMENT ' 交易状态',
  `total_price` int(11) NOT NULL DEFAULT 0 COMMENT '总价',
  `assign_buyer_id` bigint(11) NOT NULL DEFAULT 0 COMMENT '指定买家id',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`deal_id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_demon_tower
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_demon_tower`;
CREATE TABLE `tbllog_demon_tower` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT '' COMMENT '设备端 android, ios, web, pc',
  `role_id` bigint(1) DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(255) DEFAULT '' COMMENT '平台账号',
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `dim_power` int(11) DEFAULT 0 COMMENT '战斗力',
  `enter_time` int(11) DEFAULT 0 COMMENT '进入活动时间',
  `leave_time` int(11) DEFAULT 0 COMMENT '退出活动的时间',
  `floor` int(11) DEFAULT 0 COMMENT '层数',
  `kill_count` int(11) DEFAULT 0 COMMENT '击杀数',
  `is_finish` tinyint(3) DEFAULT 0 COMMENT '是否通关',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='九层妖塔日志';

-- ----------------------------
-- Table structure for tbllog_error
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_error`;
CREATE TABLE `tbllog_error` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` int(11) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `error_msg` mediumtext DEFAULT NULL,
  `did` varchar(50) DEFAULT NULL,
  `game_version` varchar(50) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `device_name` varchar(50) DEFAULT NULL,
  `device_type` varchar(50) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `log_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `HappendTime` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_event
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_event`;
CREATE TABLE `tbllog_event` (
  `platform` varchar(64) NOT NULL DEFAULT '' COMMENT '所属平台，记录SDK platform_id',
  `device` varchar(64) NOT NULL DEFAULT '' COMMENT '设备端：android| ios | web | pc',
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(64) NOT NULL DEFAULT '' COMMENT '平台唯一用户标识',
  `event_id` int(11) NOT NULL DEFAULT 0 COMMENT '事件ID（每个游戏自定义，对应dict_link_step.StepId)',
  `user_ip` varchar(64) NOT NULL DEFAULT '' COMMENT '用户IP',
  `did` varchar(64) NOT NULL DEFAULT '' COMMENT '用户设备唯一ID',
  `game_version` varchar(64) NOT NULL DEFAULT '' COMMENT '游戏版本号',
  `os` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，手机操作系统，如：android、iOS',
  `os_version` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，操作系统版本号，如：2.3.4',
  `device_name` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，设备名称，如：三星GT-S5830',
  `screen` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，屏幕分辨率，如：480*800',
  `mno` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，移动网络运营商(mobile network operators)，如：中国移动、中国联通',
  `nm` varchar(64) NOT NULL DEFAULT '' COMMENT '手游专用，联网方式(Networking mode)，如：3G、WIFI',
  `happend_time` int(11) NOT NULL DEFAULT 0,
  KEY `role_id` (`role_id`),
  KEY `happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_gold
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_gold`;
CREATE TABLE `tbllog_gold` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT '设备端：android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL COMMENT '角色ID',
  `account_name` varchar(50) DEFAULT NULL COMMENT '平台账号ID',
  `dim_level` int(11) DEFAULT 0 COMMENT '等级',
  `dim_prof` int(11) DEFAULT 0 COMMENT '职业ID',
  `money_type` int(11) DEFAULT 0 COMMENT '货币类型',
  `amount` int(11) DEFAULT 0 COMMENT '货币数量',
  `money_remain` int(11) DEFAULT 0 COMMENT '剩余货币数量',
  `item_id` int(11) DEFAULT 0 COMMENT '涉及的道具ID',
  `opt` int(11) DEFAULT 0 COMMENT '货币加减 （1=增加，2=减少）',
  `action_1` int(11) DEFAULT 0 COMMENT '行为分类1 （一级消费点）对应(dict_action.action_id)',
  `action_2` int(11) DEFAULT 0 COMMENT '若存在一级消费点,不存在二级消费点,则将二级消费点设置为一级消费点的值',
  `item_number` int(11) DEFAULT 0 COMMENT '物品数量',
  `happend_time` int(11) DEFAULT NULL COMMENT '事件发生时间',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=618482 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_items
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_items`;
CREATE TABLE `tbllog_items` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `dim_level` int(11) DEFAULT NULL,
  `opt` int(11) DEFAULT NULL,
  `action_id` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `item_number` int(11) DEFAULT NULL,
  `map_id` int(11) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=116667 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_level_up
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_level_up`;
CREATE TABLE `tbllog_level_up` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `last_level` int(11) DEFAULT NULL,
  `current_level` int(11) DEFAULT NULL,
  `last_exp` bigint(20) DEFAULT NULL,
  `current_exp` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_login
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_login`;
CREATE TABLE `tbllog_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `dim_level` int(11) DEFAULT NULL,
  `gang_id` int(11) DEFAULT 0,
  `user_ip` varchar(50) DEFAULT NULL,
  `login_map_id` int(11) DEFAULT NULL,
  `did` varchar(50) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `device_name` varchar(50) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  `game_version` varchar(50) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=394 DEFAULT CHARSET=utf8 COMMENT='登录日志';

-- ----------------------------
-- Table structure for tbllog_mail
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_mail`;
CREATE TABLE `tbllog_mail` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `mail_id` bigint(20) DEFAULT NULL,
  `mail_sender_id` bigint(20) DEFAULT NULL,
  `mail_sender_name` varchar(50) DEFAULT NULL,
  `mail_receiver_id` bigint(20) DEFAULT NULL,
  `mail_receiver_name` varchar(50) DEFAULT NULL,
  `mail_title` varchar(50) DEFAULT NULL,
  `mail_content` varchar(50) DEFAULT NULL,
  `mail_type` int(11) DEFAULT NULL,
  `mail_money_list` varchar(50) DEFAULT NULL,
  `mail_item_list` varchar(50) DEFAULT NULL,
  `mail_status` int(11) DEFAULT 0 COMMENT '1-已读，2-未读',
  `get_status` int(11) DEFAULT 0 COMMENT '1=已领取,2=未领取',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=437 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_offline_practice
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_offline_practice`;
CREATE TABLE `tbllog_offline_practice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT '' COMMENT '设备端 android, ios, web, pc',
  `role_id` bigint(1) DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(255) DEFAULT '' COMMENT '平台账号',
  `practice_secs` int(11) DEFAULT 0 COMMENT '离线挂机时间(秒)',
  `left_secs` int(11) DEFAULT 0 COMMENT '剩余挂机时间(秒)',
  `old_level` int(11) DEFAULT 0 COMMENT '原等级',
  `new_level` int(11) DEFAULT 0 COMMENT '新等级',
  `role_exp` bigint(20) DEFAULT 0 COMMENT '角色获得经验',
  `pet_exp` bigint(20) DEFAULT 0 COMMENT '宠物获得经验',
  `item_info` text DEFAULT NULL,
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=193 DEFAULT CHARSET=utf8 COMMENT='离线挂机日志';

-- ----------------------------
-- Table structure for tbllog_online
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_online`;
CREATE TABLE `tbllog_online` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `pt` int(11) DEFAULT 0,
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `people` int(11) DEFAULT NULL,
  `device_cnt` int(11) DEFAULT 0 COMMENT '在线总设备数',
  `ip_cnt` int(11) NOT NULL DEFAULT 0 COMMENT '在线IP数',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=1285 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_pay
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_pay`;
CREATE TABLE `tbllog_pay` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `dim_level` int(11) DEFAULT NULL,
  `order_id` varchar(45) DEFAULT NULL,
  `pay_money` float DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `log_time` int(11) DEFAULT NULL,
  `user_ip` varchar(50) DEFAULT NULL COMMENT '玩家IP',
  `pay_type` int(11) DEFAULT 0 COMMENT '支付方式',
  `pay_gold` int(11) NOT NULL,
  `pay_present_rid` bigint(20) NOT NULL DEFAULT 0,
  `did` varchar(50) DEFAULT NULL COMMENT '用户设备',
  `game_version` varchar(50) DEFAULT NULL COMMENT '游戏版本号',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_pet_wash
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_pet_wash`;
CREATE TABLE `tbllog_pet_wash` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` int(20) DEFAULT NULL,
  `dim_level` int(11) DEFAULT NULL,
  `class_id` tinyint(4) DEFAULT NULL COMMENT '门派id',
  `item_id` int(11) DEFAULT NULL,
  `item_num` int(11) DEFAULT NULL,
  `pet_type` int(11) DEFAULT NULL,
  `pet_id` bigint(20) DEFAULT NULL,
  `grade_type` tinyint(4) DEFAULT NULL,
  `grow` int(11) DEFAULT NULL,
  `attr` varchar(64) DEFAULT '' COMMENT '属性列表：physical,endurance,constitution,magical,speed',
  `happend_time` int(11) DEFAULT NULL,
  `log_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='宠物洗练';

-- ----------------------------
-- Table structure for tbllog_player
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_player`;
CREATE TABLE `tbllog_player` (
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `role_name` varchar(50) DEFAULT NULL COMMENT '角色名',
  `account_name` varchar(50) DEFAULT NULL COMMENT '平台账号ID',
  `user_name` varchar(50) DEFAULT NULL COMMENT '平台账号名',
  `dim_nation` varchar(50) DEFAULT NULL COMMENT '阵营',
  `dim_prof` varchar(50) DEFAULT NULL COMMENT '职业',
  `dim_sex` varchar(50) DEFAULT NULL COMMENT '性别',
  `reg_time` int(11) DEFAULT NULL COMMENT '注册时间',
  `reg_ip` varchar(40) DEFAULT NULL COMMENT 'IP',
  `did` varchar(50) DEFAULT NULL COMMENT '设备ID',
  `dim_level` int(11) DEFAULT NULL COMMENT '玩家等级',
  `dim_vip_level` int(11) DEFAULT NULL COMMENT 'VIP等级',
  `dim_exp` bigint(20) DEFAULT 0 COMMENT '当前经验',
  `dim_guild` varchar(50) DEFAULT NULL COMMENT '集团名称',
  `dim_power` int(11) DEFAULT NULL COMMENT '战斗力',
  `gold_number` int(11) DEFAULT NULL COMMENT '剩余元宝数',
  `bgold_number` int(11) DEFAULT NULL COMMENT '剩余绑定元宝数',
  `coin_number` int(50) NOT NULL DEFAULT 0 COMMENT '剩余金币数',
  `pay_money` int(11) DEFAULT NULL COMMENT '总充值',
  `first_pay_time` int(11) DEFAULT NULL COMMENT '首充时间',
  `last_pay_time` int(11) DEFAULT NULL COMMENT '最后充值时间',
  `last_login_time` int(11) DEFAULT NULL COMMENT '最后登录时间',
  `trans` int(11) NOT NULL DEFAULT 0 COMMENT '转生次数',
  `marry_state` int(11) NOT NULL DEFAULT -1 COMMENT '结婚状态',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`role_id`),
  KEY `ix_reg_time` (`reg_time`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='玩家信息';

-- ----------------------------
-- Table structure for tbllog_pve
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_pve`;
CREATE TABLE `tbllog_pve` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT '' COMMENT '设备端 android, ios, web, pc',
  `role_id` bigint(1) DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(255) DEFAULT '' COMMENT '平台账号',
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `action_type` int(11) DEFAULT 0 COMMENT '功能类型ID',
  `action_id` int(11) DEFAULT NULL COMMENT '功能ID',
  `pve_id` int(11) DEFAULT 0 COMMENT '功能ID',
  `dim_power` int(11) DEFAULT 0 COMMENT '战斗力',
  `status` int(11) DEFAULT 0 COMMENT '0=提前退出，1=进入(开始)，2=结束(完成)，3=提前退出(未完成),4=超时(未完成)',
  `info` varchar(1000) DEFAULT '' COMMENT '行为标志',
  `begin_time` int(11) DEFAULT 0,
  `end_time` int(11) DEFAULT 0,
  `time_duration` int(11) DEFAULT 0,
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_end_time` (`end_time`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=6441 DEFAULT CHARSET=utf8 COMMENT='PVE日志';

-- ----------------------------
-- Table structure for tbllog_quit
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_quit`;
CREATE TABLE `tbllog_quit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `login_level` int(11) DEFAULT NULL,
  `logout_level` int(11) DEFAULT NULL,
  `login_ip` varchar(50) DEFAULT NULL,
  `login_time` int(11) DEFAULT NULL,
  `logout_time` int(11) DEFAULT NULL,
  `time_duration` int(11) DEFAULT NULL,
  `logout_map_id` int(11) DEFAULT NULL,
  `logout_ip` varchar(50) DEFAULT NULL,
  `reason_id` int(11) DEFAULT NULL,
  `msg` varchar(200) DEFAULT NULL,
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `device_type` varchar(50) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  `did` varchar(50) DEFAULT NULL,
  `game_version` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_logout_time` (`logout_time`)
) ENGINE=InnoDB AUTO_INCREMENT=380 DEFAULT CHARSET=utf8 COMMENT='退出日志';

-- ----------------------------
-- Table structure for tbllog_real_role
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_real_role`;
CREATE TABLE `tbllog_real_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(50) DEFAULT NULL,
  `device` varchar(64) NOT NULL DEFAULT '' COMMENT '设备端：android| ios | web | pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_role
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role`;
CREATE TABLE `tbllog_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `did` varchar(50) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `user_ip` varchar(50) DEFAULT NULL COMMENT '用户IP',
  `dim_prof` int(11) DEFAULT NULL,
  `dim_sex` int(11) DEFAULT 0 COMMENT '性别',
  `game_version` varchar(50) DEFAULT NULL COMMENT '游戏版本号',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=147 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_role_invit
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_invit`;
CREATE TABLE `tbllog_role_invit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(50) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `type` int(11) DEFAULT 0 COMMENT '分享类型',
  `picture` int(11) DEFAULT 0 COMMENT '分享图片',
  `invited_account` varchar(50) DEFAULT NULL COMMENT '成功邀请的账号',
  `opt` int(11) DEFAULT 0 COMMENT '操作类型 1-成功邀请 2-达成等级',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_role_share
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_share`;
CREATE TABLE `tbllog_role_share` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(50) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `type` int(11) DEFAULT 0 COMMENT '分享类型',
  `picture` int(11) DEFAULT 0 COMMENT '分享图片',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_rt_role
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_rt_role`;
CREATE TABLE `tbllog_rt_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0' COMMENT 'wx_ | 4399_ | quick_',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `did` varchar(50) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `role_name` varchar(50) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `user_ip` varchar(50) DEFAULT NULL COMMENT '用户IP',
  `dim_prof` int(11) DEFAULT NULL,
  `dim_sex` int(11) DEFAULT 0 COMMENT '性别',
  `game_version` varchar(50) DEFAULT NULL COMMENT '游戏版本号',
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_shop
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_shop`;
CREATE TABLE `tbllog_shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT 'android' COMMENT 'android|ios|web|pc',
  `role_id` bigint(20) DEFAULT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `shopId` int(11) DEFAULT NULL,
  `dim_level` int(11) DEFAULT NULL,
  `dim_prof` int(11) DEFAULT NULL,
  `money_type` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `item_type_1` int(11) DEFAULT NULL,
  `item_type_2` int(11) DEFAULT NULL,
  `item_id` int(11) DEFAULT NULL,
  `item_number` int(11) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=185 DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Table structure for tbllog_role_ext
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_ext`;
CREATE TABLE `tbllog_role_ext` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `cur_value` int(11) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_kill_monster
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_kill_monster`;
CREATE TABLE `tbllog_kill_monster` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `monster_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for tbllog_player_weapon
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_weapon`;
CREATE TABLE `tbllog_role_weapon` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '强化/精炼/洗练/日志类型',
  `pos_id` int(20) DEFAULT NULL COMMENT '位置ID',
  `rank_level`  int(20) DEFAULT NULL COMMENT '阶级',
  `color` int(20) DEFAULT NULL COMMENT '颜色',
  `star`  int(20) DEFAULT NULL COMMENT '星级',
  `value`  int(20) DEFAULT NULL COMMENT '对应type类型的值',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_role_gem
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_gem`;
CREATE TABLE `tbllog_role_gem` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '红宝石/绿宝石',
  `lv_1` int(11) DEFAULT NULL COMMENT '一级宝石数量',
  `lv_2` int(11) DEFAULT NULL COMMENT '二级宝石数量',
  `lv_3` int(11) DEFAULT NULL COMMENT '三级宝石数量',
  `lv_4` int(11) DEFAULT NULL COMMENT '四级宝石数量',
  `lv_5` int(11) DEFAULT NULL COMMENT '五级宝石数量',
  `lv_6` int(11) DEFAULT NULL COMMENT '六级宝石数量',
  `lv_7` int(11) DEFAULT NULL COMMENT '七级宝石数量',
  `lv_8` int(11) DEFAULT NULL COMMENT '八级宝石数量',
  `lv_9` int(11) DEFAULT NULL COMMENT '九级宝石数量',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for tbllog_role_process
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_process`;
CREATE TABLE `tbllog_role_process` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `type` int(11) DEFAULT NULL COMMENT '日志类型',
  `val`  int(20) DEFAULT NULL COMMENT '对应值',
  -- `extype` int(11) DEFAULT NULL COMMENT '子类型',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- Table structure for tbllog_player_compose
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_role_compose`;
CREATE TABLE `tbllog_role_compose` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_id` bigint(20) DEFAULT NULL,
  `happend_time` int(11) DEFAULT NULL,
  `compose_id` int(20) DEFAULT NULL COMMENT '合成ID',
  `item1` int(20) DEFAULT NULL COMMENT 'item1',
  `item2`  int(20) DEFAULT NULL COMMENT 'item2',
  `item3` int(20) DEFAULT NULL COMMENT 'item3',
  `item4`  int(20) DEFAULT NULL COMMENT 'item4',
  `item5` int(20) DEFAULT NULL COMMENT 'item5',
  `item6`  int(20) DEFAULT NULL COMMENT 'item6',
  `value`  int(20) DEFAULT NULL COMMENT '合成的装备id',
  `log_type`  int(20) DEFAULT NULL COMMENT '类型',
  PRIMARY KEY (`id`),
  KEY `ix_hanppend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=2947 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for tbllog_gang_tower
-- ----------------------------
DROP TABLE IF EXISTS `tbllog_gang_tower`;
CREATE TABLE `tbllog_gang_tower` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` varchar(100) DEFAULT '0',
  `device` varchar(50) DEFAULT '' COMMENT '设备端 android, ios, web, pc',
  `role_id` bigint(1) DEFAULT 0 COMMENT '角色ID',
  `account_name` varchar(255) DEFAULT '' COMMENT '平台账号',
  `dim_level` int(11) DEFAULT 0 COMMENT '玩家等级',
  `dim_power` int(11) DEFAULT 0 COMMENT '战斗力',
  `enter_time` int(11) DEFAULT 0 COMMENT '进入活动时间',
  `leave_time` int(11) DEFAULT 0 COMMENT '退出活动的时间',
  `floor` int(11) DEFAULT 0 COMMENT '层数',
  `kill_count` int(11) DEFAULT 0 COMMENT '击杀数',
  `is_finish` tinyint(3) DEFAULT 0 COMMENT '是否通关',
  `happend_time` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `ix_happend_time` (`happend_time`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='集团日志';
