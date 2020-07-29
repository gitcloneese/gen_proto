/*
 Navicat Premium Data Transfer

 Source Server         : root@192.168.0.12
 Source Server Type    : MariaDB
 Source Server Version : 100313
 Source Host           : 192.168.0.12:3306
 Source Schema         : y_game

 Target Server Type    : MariaDB
 Target Server Version : 100313
 File Encoding         : 65001

 Date: 17/12/2019 16:28:21
*/

--
-- sql:2019121701
-- 初始化数据库
--

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity_rank_result
-- ----------------------------
DROP TABLE IF EXISTS `activity_rank_result`;
CREATE TABLE `activity_rank_result` (
  `id` tinyint(3) NOT NULL DEFAULT 0 COMMENT '活动id',
  `result` text DEFAULT NULL COMMENT '奖励信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for block_info
-- ----------------------------
DROP TABLE IF EXISTS `block_info`;
CREATE TABLE `block_info` (
  `block_type` int(11) NOT NULL DEFAULT 0 COMMENT '封禁类型',
  `block_val` varchar(255) NOT NULL DEFAULT '' COMMENT '被封禁值',
  `reason` varchar(255) DEFAULT NULL COMMENT '封禁原因',
  `end_time` int(11) DEFAULT 0 COMMENT '解禁时间',
  PRIMARY KEY (`block_type`,`block_val`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='封禁信息';

-- ----------------------------
-- Table structure for boss_drop
-- ----------------------------
DROP TABLE IF EXISTS `boss_drop`;
CREATE TABLE `boss_drop` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `zone_id` int(11) NOT NULL DEFAULT 0,
  `instance_id` int(11) DEFAULT 0 COMMENT '副本ID',
  `role_id` bigint(20) DEFAULT 0 COMMENT '角色ID',
  `monster_id` int(11) NOT NULL DEFAULT 0 COMMENT '怪物ID',
  `item_id` int(11) DEFAULT 0 COMMENT '物品ID',
  `uniq_id` bigint(20) NOT NULL DEFAULT 0,
  `color` tinyint(3) DEFAULT 0 COMMENT '品质',
  `count` int(11) DEFAULT 0 COMMENT '数量',
  `time` int(11) DEFAULT 0,
  `ext_data` text DEFAULT NULL COMMENT '装备附加信息',
  PRIMARY KEY (`id`),
  KEY `ix_time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for boss_kill
-- ----------------------------
DROP TABLE IF EXISTS `boss_kill`;
CREATE TABLE `boss_kill` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `zone_id` int(11) NOT NULL DEFAULT 0,
  `instance_id` int(11) DEFAULT 0 COMMENT '副本ID',
  `monster_id` int(11) DEFAULT 0 COMMENT '怪物ID',
  `role_id` bigint(20) DEFAULT 0 COMMENT '角色ID',
  `time` int(11) DEFAULT 0 COMMENT '击杀时间',
  PRIMARY KEY (`id`),
  KEY `ix_time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for charge_order_request
-- ----------------------------
DROP TABLE IF EXISTS `charge_order_request`;
CREATE TABLE `charge_order_request` (
  `id` bigint(20) unsigned NOT NULL,
  `order_id` varchar(128) NOT NULL,
  `order_type` int(11) DEFAULT 0 COMMENT '订单类型',
  `order_type_key` int(11) DEFAULT 0 COMMENT '订单类型key',
  `order_money` int(11) DEFAULT 0 COMMENT '订单金额',
  `request_rid` bigint(20) DEFAULT 0 COMMENT '订单发起者角色ID',
  `request_uid` varchar(64) DEFAULT NULL COMMENT '订单发起者角色account',
  `pay_rid` bigint(20) DEFAULT 0 COMMENT '订单支付者角色ID',
  `proxy_lock` int(11) DEFAULT 0 COMMENT '订单金额',
  `proxy_lock_timeout` int(11) DEFAULT 0 COMMENT '订单金额',
  `present_rid` bigint(20) DEFAULT 0 COMMENT '订单支付者角色ID',
  `present_uid` varchar(64) DEFAULT NULL COMMENT '订单支付者角色account',
  `start_time` int(11) DEFAULT 0 COMMENT '订单开始时间',
  `end_time` int(11) DEFAULT 0 COMMENT '订单结束时间',
  `complete_time` int(11) DEFAULT 0 COMMENT '订单完成时间',
  `extend_info` text DEFAULT NULL COMMENT '订单附加信息',
  `order_status` int(11) DEFAULT 0 COMMENT '订单状态',
  `vivo_order_id` varchar(256) DEFAULT NULL COMMENT 'vivo流水号',
  `oppo_order_id` varchar(256) DEFAULT NULL COMMENT 'oppo流水号',
  `ver` varchar(50) DEFAULT NULL COMMENT '充值接口版本',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for chat_offline
-- ----------------------------
DROP TABLE IF EXISTS `chat_offline`;
CREATE TABLE `chat_offline` (
  `id` bigint(20) NOT NULL,
  `content` text DEFAULT NULL,
  `time` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for db_version
-- ----------------------------
DROP TABLE IF EXISTS `db_version`;
CREATE TABLE `db_version` (
  `version` varchar(32) NOT NULL COMMENT '版本(YYYYMMDDNN)',
  PRIMARY KEY (`version`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COMMENT='当前数据库版本，更新数据库时使用';

-- ----------------------------
-- Table structure for gang
-- ----------------------------
DROP TABLE IF EXISTS `gang`;
CREATE TABLE `gang` (
  `gang_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '集团id',
  `gang_name` varchar(255) DEFAULT '' COMMENT '集团名称',
  `gang_level` smallint(4) DEFAULT 1 COMMENT '集团等级',
  `rank` int(11) DEFAULT NULL COMMENT '集团排名',
  `gang_board` varchar(1024) DEFAULT NULL COMMENT '集团公告',
  `gang_fund` bigint(20) DEFAULT NULL COMMENT '集团资金',
  `competition_level` smallint(4) DEFAULT NULL COMMENT '集团争霸等级',
  `leader_id` bigint(20) DEFAULT NULL COMMENT '盟主id',
  `deputies_ids` varchar(255) DEFAULT '[]' COMMENT '副盟主列表',
  `elders_ids` varchar(255) DEFAULT NULL COMMENT '长老列表',
  `member_count` int(11) DEFAULT NULL COMMENT '成员数',
  `gang_member` mediumtext DEFAULT NULL COMMENT '成员列表',
  `total_combat` bigint(20) DEFAULT NULL COMMENT '总战斗力',
  `is_auto_accept` smallint(4) DEFAULT NULL COMMENT '自动接收',
  `apply_level_limit` int(11) DEFAULT NULL COMMENT '申请等级下限',
  `apply_combat_limit` bigint(20) DEFAULT NULL COMMENT '申请战斗力下限',
  `create_time` int(11) NOT NULL DEFAULT 0,
  `beast_food` int(11) NOT NULL DEFAULT 0 COMMENT '集团兽粮',
  `beast_times` int(11) NOT NULL DEFAULT 0 COMMENT '神兽次数',
  `beast_cd` int(11) NOT NULL DEFAULT 0 COMMENT '神兽CD到期时间',
  PRIMARY KEY (`gang_id`),
  KEY `idx_name` (`gang_name`) USING HASH
) ENGINE=InnoDB AUTO_INCREMENT=24000004 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for gang_store
-- ----------------------------
DROP TABLE IF EXISTS `gang_store`;
CREATE TABLE `gang_store` (
  `gang_id` bigint(20) NOT NULL,
  `store_record` longtext NOT NULL,
  `store_house` text NOT NULL,
  PRIMARY KEY (`gang_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for global_data
-- ----------------------------
DROP TABLE IF EXISTS `global_data`;
CREATE TABLE `global_data` (
  `id` int(11) unsigned NOT NULL COMMENT 'key',
  `val` text DEFAULT NULL COMMENT 'val',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='全局数据表';

-- ----------------------------
-- Table structure for global_mail
-- ----------------------------
DROP TABLE IF EXISTS `global_mail`;
CREATE TABLE `global_mail` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `content` text DEFAULT NULL COMMENT '内容',
  `attachment` varchar(1000) DEFAULT NULL COMMENT '附件',
  `conditions` varchar(1000) DEFAULT NULL COMMENT '接收邮件的玩家条件',
  `server_ids` text DEFAULT NULL COMMENT '服务器ID列表',
  `expire_time` int(11) DEFAULT 0 COMMENT '有效期',
  `create_time` int(11) DEFAULT 0 COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='全局邮件';

-- ----------------------------
-- Table structure for item_elf_equip
-- ----------------------------
DROP TABLE IF EXISTS `item_elf_equip`;
CREATE TABLE `item_elf_equip` (
  `uniq_id` bigint(20) unsigned NOT NULL,
  `item_id` bigint(20) NOT NULL DEFAULT 0,
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `blue_attr` text DEFAULT NULL,
  `purple_attr` text DEFAULT NULL,
  `strengthen_lv` int(11) NOT NULL DEFAULT 0,
  `strengthen_exp` int(11) NOT NULL DEFAULT 0,
  `score` int(11) NOT NULL DEFAULT 0,
  `base_score` int(11) NOT NULL DEFAULT 0 COMMENT '装备基础评分',
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='仙灵装备道具扩展信息表';

-- ----------------------------
-- Table structure for item_equip
-- ----------------------------
DROP TABLE IF EXISTS `item_equip`;
CREATE TABLE `item_equip` (
  `uniq_id` bigint(20) unsigned NOT NULL,
  `item_id` bigint(20) NOT NULL DEFAULT 0,
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `activity` int(11) NOT NULL DEFAULT 0,
  `equip_basic_attr` text DEFAULT NULL,
  `equip_blue_attr` text DEFAULT NULL,
  `equip_purple_attr` text DEFAULT NULL,
  `equip_pink_attr` text DEFAULT NULL,
  `equip_score` int(11) NOT NULL DEFAULT 0,
  `equip_gem` text DEFAULT NULL,
  `suit_id` int(11) NOT NULL DEFAULT 0,
  `equip_gem_score` int(11) NOT NULL DEFAULT 0,
  `suit_cost` text DEFAULT NULL,
  `suit_list` text DEFAULT NULL,
  `time_left` int(11) DEFAULT 0,
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='装备道具扩展信息表';

-- ----------------------------
-- Table structure for item_fate
-- ----------------------------
DROP TABLE IF EXISTS `item_fate`;
CREATE TABLE `item_fate` (
  `uniq_id` bigint(20) unsigned NOT NULL,
  `item_id` bigint(20) NOT NULL DEFAULT 0,
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `level` bigint(20) NOT NULL DEFAULT 0,
  `fate_lock` bigint(20) DEFAULT NULL,
  `compose_item` text NOT NULL COMMENT '已消耗的合成材料',
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='符文道具扩展信息表';

-- ----------------------------
-- Table structure for item_soul_equip
-- ----------------------------
DROP TABLE IF EXISTS `item_soul_equip`;
CREATE TABLE `item_soul_equip` (
  `uniq_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '聚魂唯一id',
  `owner_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '拥有者',
  `item_id` int(11) NOT NULL DEFAULT 0 COMMENT '道具id',
  `bound` tinyint(1) NOT NULL DEFAULT 0 COMMENT '绑定状态',
  `grade` smallint(5) NOT NULL DEFAULT 0 COMMENT '等级',
  `exp` int(11) NOT NULL DEFAULT 0 COMMENT '经验',
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for item_squire_equip
-- ----------------------------
DROP TABLE IF EXISTS `item_squire_equip`;
CREATE TABLE `item_squire_equip` (
  `uniq_id` bigint(20) unsigned NOT NULL,
  `item_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='战队装备表';

-- ----------------------------
-- Table structure for log_charge
-- ----------------------------
DROP TABLE IF EXISTS `log_charge`;
CREATE TABLE `log_charge` (
  `order_id` varchar(50) NOT NULL,
  `game_id` varchar(50) DEFAULT NULL,
  `server_id` int(11) DEFAULT NULL,
  `account` varchar(64) DEFAULT NULL COMMENT '账号',
  `role_id` bigint(20) DEFAULT 0 COMMENT '角色ID',
  `pay_way` int(11) DEFAULT NULL,
  `gold` int(11) DEFAULT NULL COMMENT '元宝',
  `money` decimal(10,2) DEFAULT NULL COMMENT '充值金额',
  `callback_info` varchar(200) DEFAULT NULL,
  `order_status` varchar(45) DEFAULT NULL,
  `failed_desc` varchar(128) DEFAULT NULL,
  `charge_time` timestamp NULL DEFAULT current_timestamp(),
  `charged` int(11) DEFAULT 0 COMMENT '0-未发元宝,1-已发元宝',
  PRIMARY KEY (`order_id`),
  KEY `charged_idx` (`charged`),
  KEY `role_id_idx` (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for mail
-- ----------------------------
DROP TABLE IF EXISTS `mail`;
CREATE TABLE `mail` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `from_id` bigint(20) DEFAULT 0 COMMENT '发送者',
  `to_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '接收者',
  `text_id` int(11) NOT NULL DEFAULT 0 COMMENT '邮件模板Id',
  `type` int(11) NOT NULL DEFAULT 0 COMMENT '邮件类型',
  `title` varchar(255) DEFAULT NULL COMMENT '标题',
  `author` varchar(100) NOT NULL DEFAULT '' COMMENT '邮件署名',
  `content` text DEFAULT NULL COMMENT '内容参数',
  `attachment` varchar(500) DEFAULT '[]' COMMENT '附件',
  `send_time` int(11) NOT NULL DEFAULT 0 COMMENT '发送时间',
  `expire_time` int(11) NOT NULL DEFAULT 0 COMMENT '过期时间',
  `status` smallint(6) DEFAULT 0 COMMENT '状态,0-未读,1-已读,2-附件已领取',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='邮件表';

-- ----------------------------
-- Table structure for marriage
-- ----------------------------
DROP TABLE IF EXISTS `marriage`;
CREATE TABLE `marriage` (
  `marriage_id` bigint(20) unsigned NOT NULL COMMENT '结婚id',
  `boy_id` bigint(20) unsigned NOT NULL COMMENT '夫id',
  `girl_id` bigint(20) unsigned NOT NULL COMMENT '妻id',
  `wedding_num` int(11) NOT NULL DEFAULT 0 COMMENT '举办婚宴次数',
  `wedding_list` text NOT NULL COMMENT '已提亲信息',
  `marriage_time` int(11) NOT NULL DEFAULT 0 COMMENT '结婚时间',
  `boy_box_buy_time` int(11) NOT NULL DEFAULT 0 COMMENT '夫宝匣购买时间',
  `girl_box_buy_time` int(11) NOT NULL DEFAULT 0 COMMENT '妻宝匣购买时间',
  PRIMARY KEY (`marriage_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='结婚';

-- ----------------------------
-- Table structure for order_4399
-- ----------------------------
DROP TABLE IF EXISTS `order_4399`;
CREATE TABLE `order_4399` (
  `order_id` char(22) COLLATE utf8mb4_unicode_ci NOT NULL,
  `charge_id` bigint(20) NOT NULL,
  `fnpid` int(11) NOT NULL,
  `uid` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(11) NOT NULL,
  `callback_info` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fnpidraw` int(11) NOT NULL,
  `insert_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  UNIQUE KEY `charge_id` (`charge_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for pt_acct_info
-- ----------------------------
DROP TABLE IF EXISTS `pt_acct_info`;
CREATE TABLE `pt_acct_info` (
  `pt` int(11) NOT NULL,
  `cnt` int(11) NOT NULL DEFAULT 0 COMMENT '对应渠道人数',
  `pay_acct` text DEFAULT NULL,
  `wait_acct` text DEFAULT NULL,
  PRIMARY KEY (`pt`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for rank
-- ----------------------------
DROP TABLE IF EXISTS `rank`;
CREATE TABLE `rank` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `rank_list` text NOT NULL COMMENT '排行榜数据',
  `sort_by` varchar(255) NOT NULL DEFAULT 'desc' COMMENT '排序方式,asc-升序,desc-降序',
  `capacity` int(11) NOT NULL DEFAULT 0 COMMENT '容量',
  `len` int(11) NOT NULL DEFAULT 0 COMMENT '当前数量',
  `show_top_n` int(11) NOT NULL DEFAULT 0 COMMENT '显示前N名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='排行榜';

-- ----------------------------
-- Table structure for role_achievement
-- ----------------------------
DROP TABLE IF EXISTS `role_achievement`;
CREATE TABLE `role_achievement` (
  `role_id` bigint(20) unsigned NOT NULL,
  `total_points` int(11) NOT NULL DEFAULT 0,
  `get_points_rw` text DEFAULT NULL,
  `finish_achi` text DEFAULT NULL,
  `statistics` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色成就表';

-- ----------------------------
-- Table structure for role_activity
-- ----------------------------
DROP TABLE IF EXISTS `role_activity`;
CREATE TABLE `role_activity` (
  `role_id` bigint(20) NOT NULL,
  `points` int(11) NOT NULL DEFAULT 0,
  `last_reset_time` int(11) NOT NULL DEFAULT 0,
  `today_finish_list` text DEFAULT NULL,
  `today_fetch_rw_log` text DEFAULT NULL,
  `yestoday_finish_list` text DEFAULT NULL,
  `gold_fetch_rw_log` text DEFAULT NULL,
  `today_getback_log` text DEFAULT NULL,
  `offline_exp_time` int(11) NOT NULL DEFAULT 0,
  `lv` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `show_lv` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户日常活动进度表';

-- ----------------------------
-- Table structure for role_activity_lottery
-- ----------------------------
DROP TABLE IF EXISTS `role_activity_lottery`;
CREATE TABLE `role_activity_lottery` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `point` int(11) NOT NULL DEFAULT 0 COMMENT '点数',
  `current_drop_id` int(11) NOT NULL DEFAULT 0 COMMENT '当前掉落id',
  `remain_drop_list` varchar(1024) NOT NULL DEFAULT '' COMMENT '剩余未发放的掉落列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_arena
-- ----------------------------
DROP TABLE IF EXISTS `role_arena`;
CREATE TABLE `role_arena` (
  `role_id` bigint(20) NOT NULL,
  `ranking` int(11) NOT NULL DEFAULT 0,
  `can_challenge_times` int(11) NOT NULL DEFAULT 0,
  `buy_challenge_times` int(11) NOT NULL DEFAULT 0,
  `already_encourage_times` int(11) NOT NULL DEFAULT 0,
  `encourage_effect_time` int(11) NOT NULL DEFAULT 0,
  `last_reward_time` int(11) NOT NULL DEFAULT 0,
  `generate_arena_info` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='单人竞技场';

-- ----------------------------
-- Table structure for role_attribute
-- ----------------------------
DROP TABLE IF EXISTS `role_attribute`;
CREATE TABLE `role_attribute` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `platform` int(11) DEFAULT 0 COMMENT '平台',
  `account` varchar(64) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '平台账号',
  `pt` int(11) NOT NULL DEFAULT 0 COMMENT '对应SDK登录协议中的pt字段，用于区分自有平台和联营平台',
  `uid` varchar(100) DEFAULT NULL COMMENT '平台帐号ID',
  `server_id` int(11) DEFAULT NULL COMMENT '服务器ID',
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL DEFAULT '' COMMENT '角色名',
  `head` varchar(512) DEFAULT '' COMMENT '头像',
  `create_at` int(11) DEFAULT NULL COMMENT '创角时间',
  `sex` int(1) DEFAULT NULL COMMENT '性别,0-女,1-男',
  `trans` int(11) NOT NULL DEFAULT 0,
  `level` int(11) DEFAULT 1 COMMENT '等级',
  `exp` bigint(20) DEFAULT 0 COMMENT '经验',
  `exp_per_minute` bigint(20) DEFAULT NULL COMMENT '每分钟杀怪经验',
  `exp_addition_rate` int(11) NOT NULL DEFAULT 0 COMMENT '经验加成比例',
  `vip` int(11) NOT NULL DEFAULT 0 COMMENT 'VIP等级',
  `title` int(11) DEFAULT 0 COMMENT '称号',
  `gold_unbound` bigint(20) unsigned DEFAULT 0 COMMENT '元宝',
  `gold_bound` bigint(20) unsigned DEFAULT 0 COMMENT '绑定元宝',
  `coin` bigint(20) unsigned DEFAULT 0 COMMENT '铜币',
  `coin_invit` bigint(20) DEFAULT 0 COMMENT '邀请币',
  `combat` bigint(20) DEFAULT 0 COMMENT '战斗力',
  `scene` int(11) DEFAULT 0 COMMENT '场景ID',
  `x` int(11) DEFAULT 0 COMMENT 'X坐标',
  `y` int(11) DEFAULT 0 COMMENT 'Y坐标',
  `pre_scene` int(11) NOT NULL DEFAULT 0,
  `pre_x` int(11) NOT NULL DEFAULT 0,
  `pre_y` int(11) NOT NULL,
  `hp` int(11) NOT NULL DEFAULT 0 COMMENT '当前血量',
  `ip` varchar(40) DEFAULT NULL,
  `last_login_ip` varchar(40) DEFAULT NULL COMMENT '最近登陆IP',
  `sharelvl` int(11) DEFAULT 0 COMMENT '分享等级',
  `share_inviter` varchar(256) NOT NULL DEFAULT '[0,<<>>,0,0]' COMMENT '邀请人信息',
  `from_scene` int(11) DEFAULT 0 COMMENT '创角色场景',
  `from_scene_note` varchar(50) DEFAULT '0' COMMENT '创角色场景',
  `city` varchar(64) DEFAULT NULL COMMENT '所在城市',
  `register_time` int(11) NOT NULL DEFAULT 0 COMMENT '注册时间',
  `last_login` int(11) NOT NULL DEFAULT 0 COMMENT '上次登录时间',
  `last_logout` int(11) NOT NULL DEFAULT 0 COMMENT '上次下线时间',
  `mode` tinyint(4) NOT NULL DEFAULT 0 COMMENT '0-和平，1-强制，2-全体',
  `pk` int(11) NOT NULL DEFAULT 0 COMMENT 'PK值',
  `pk_end_time` int(11) NOT NULL DEFAULT 0 COMMENT 'PK值清零时间',
  `charm` int(11) DEFAULT 0 COMMENT '魅力值',
  `overflow_exp` bigint(20) NOT NULL DEFAULT 0 COMMENT '溢出经验',
  `dragon_soul_lv` int(11) NOT NULL DEFAULT 0 COMMENT '龙魂等级',
  `real_role` int(11) DEFAULT 0 COMMENT '是否有效玩家 0-否 1-是',
  `current_login_time` int(11) DEFAULT 0 COMMENT '当前登录时间',
  `day_online_duration` int(11) DEFAULT 0 COMMENT '当天累计在线时长',
  `open_id` text DEFAULT NULL COMMENT '玩家对应的open_id',
  PRIMARY KEY (`id`),
  KEY `level_idx` (`level`),
  KEY `name_idx` (`name`) USING BTREE,
  KEY `account_idx` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=24000053 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_bag
-- ----------------------------
DROP TABLE IF EXISTS `role_bag`;
CREATE TABLE `role_bag` (
  `role_id` bigint(20) unsigned NOT NULL,
  `extra_cell_num` int(11) NOT NULL DEFAULT 0,
  `cells` text DEFAULT NULL,
  `use_item_num` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色背包';

-- ----------------------------
-- Table structure for role_beauty
-- ----------------------------
DROP TABLE IF EXISTS `role_beauty`;
CREATE TABLE `role_beauty` (
  `role_id` bigint(20) NOT NULL COMMENT '用户id',
  `energy` varchar(256) NOT NULL COMMENT '体力信息',
  `beauty_id_list` varchar(64) NOT NULL COMMENT '红颜id列表',
  `beauty_details` text NOT NULL COMMENT '红颜信息',
  `give_gifts` varchar(512) NOT NULL COMMENT '送礼信息',
  `doll_machine` varchar(512) NOT NULL COMMENT '娃娃机',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='红颜表';

-- ----------------------------
-- Table structure for role_charge
-- ----------------------------
DROP TABLE IF EXISTS `role_charge`;
CREATE TABLE `role_charge` (
  `role_id` bigint(20) NOT NULL,
  `total_charged` int(11) NOT NULL DEFAULT 0,
  `received_charge_reward` varchar(256) NOT NULL DEFAULT '[]',
  `charge_id_list` varchar(128) NOT NULL DEFAULT '[]',
  `week_card_remains_days` tinyint(4) NOT NULL DEFAULT 0,
  `is_received_today` tinyint(4) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_charge_order
-- ----------------------------
DROP TABLE IF EXISTS `role_charge_order`;
CREATE TABLE `role_charge_order` (
  `role_id` bigint(11) NOT NULL,
  `order_lists` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户充值订单';

-- ----------------------------
-- Table structure for role_checkpoint
-- ----------------------------
DROP TABLE IF EXISTS `role_checkpoint`;
CREATE TABLE `role_checkpoint` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `checkpoint_id` int(11) DEFAULT 0 COMMENT '关卡ID',
  `kill_count` int(11) DEFAULT 0 COMMENT '杀怪数',
  `auto_challenge` int(11) DEFAULT 0 COMMENT '自动挑战boss 0-否 1-是',
  `challenge_list` text DEFAULT NULL COMMENT '挑战过的关卡列表',
  `challenged_list` text DEFAULT NULL COMMENT '挑战成功的关卡列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_cloak
-- ----------------------------
DROP TABLE IF EXISTS `role_cloak`;
CREATE TABLE `role_cloak` (
  `role_id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `cloak_image_in_scene` bigint(20) DEFAULT NULL,
  `change_cloak_list` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='披风';

-- ----------------------------
-- Table structure for role_commerce
-- ----------------------------
DROP TABLE IF EXISTS `role_commerce`;
CREATE TABLE `role_commerce` (
  `id` bigint(20) NOT NULL DEFAULT 0 COMMENT 'role_id',
  `company_level` int(11) NOT NULL DEFAULT 0 COMMENT '公司等级',
  `company_score` int(11) NOT NULL DEFAULT 0 COMMENT '公司分数',
  `employees` text NOT NULL COMMENT '员工',
  `employee_fragments` text NOT NULL COMMENT '员工碎片',
  `lands` text NOT NULL COMMENT '土地',
  `buildings` text NOT NULL COMMENT '建筑',
  `recruit_count_map` varchar(512) NOT NULL DEFAULT '' COMMENT '招聘次数列表',
  `recruit_poor_harvest_map` varchar(512) NOT NULL DEFAULT '' COMMENT '招聘次数列表, 没抽到大奖',
  `last_run_time` bigint(20) NOT NULL DEFAULT 0 COMMENT '上次触发定时器的时间',
  `task` text NOT NULL,
  `last_free_time` text NOT NULL COMMENT 'list, 上次免费抽奖的时间戳',
  `last_collect_coin_time` bigint(32) NOT NULL DEFAULT 0 COMMENT '上一次领取金币时间',
  `last_calc_coin_time` bigint(32) NOT NULL DEFAULT 0 COMMENT '记录上一次计算金币的时间',
  `add_coin_num` bigint(32) NOT NULL DEFAULT 0 COMMENT '计算上一次计算应该领取的金币',
  `company_skills` text NOT NULL COMMENT '已激活技能列表',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_counter
-- ----------------------------
DROP TABLE IF EXISTS `role_counter`;
CREATE TABLE `role_counter` (
  `role_id` bigint(20) unsigned NOT NULL COMMENT '角色id',
  `counter_daily` text DEFAULT NULL COMMENT '每日计数',
  `counter_date` text DEFAULT NULL COMMENT '多日计数',
  `counter_persistent` text DEFAULT NULL COMMENT '永久计数',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色计数';

-- ----------------------------
-- Table structure for role_crazy_activity
-- ----------------------------
DROP TABLE IF EXISTS `role_crazy_activity`;
CREATE TABLE `role_crazy_activity` (
  `uniq_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家key(玩家id+4位活动id)',
  `key_count` int(11) NOT NULL DEFAULT 0 COMMENT '累积计数',
  `single_sign` int(11) NOT NULL DEFAULT 0 COMMENT '单值标记',
  `multi_sign` text NOT NULL COMMENT '多值标记',
  `init_time` int(11) NOT NULL DEFAULT 0 COMMENT '初始化时间',
  PRIMARY KEY (`uniq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_daily_charge
-- ----------------------------
DROP TABLE IF EXISTS `role_daily_charge`;
CREATE TABLE `role_daily_charge` (
  `role_id` bigint(20) NOT NULL COMMENT '玩家id',
  `last_charge_timestamp` int(11) NOT NULL COMMENT '最后充值时间戳',
  `charge_gold` int(11) NOT NULL COMMENT '当天充值金额',
  `charge_list` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '充值信息',
  `charge_detail` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '当日领奖信息',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='累冲表';

-- ----------------------------
-- Table structure for role_dress_up
-- ----------------------------
DROP TABLE IF EXISTS `role_dress_up`;
CREATE TABLE `role_dress_up` (
  `role_id` bigint(20) NOT NULL,
  `clothes` text DEFAULT NULL,
  `weapon` text DEFAULT NULL,
  `light` text DEFAULT NULL,
  `bubble` text DEFAULT NULL,
  `frame` text DEFAULT NULL,
  `head` text DEFAULT NULL,
  `bg` text DEFAULT NULL,
  `lock_list` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='装扮';

-- ----------------------------
-- Table structure for role_dungeon
-- ----------------------------
DROP TABLE IF EXISTS `role_dungeon`;
CREATE TABLE `role_dungeon` (
  `role_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `max` varchar(16) COLLATE utf8mb4_unicode_ci DEFAULT '' COMMENT '推图进度',
  `strength` int(11) DEFAULT NULL COMMENT '当前剩余体力',
  `buy_strength_num` int(11) DEFAULT NULL COMMENT '当天购买体力次数',
  `reward_list` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '领奖列表',
  `schedule_list` varchar(2048) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '详细信息',
  `strength_list` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '体力恢复信息',
  `chapter_star_list` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '章节星星数量',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5000077 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Table structure for role_elf
-- ----------------------------
DROP TABLE IF EXISTS `role_elf`;
CREATE TABLE `role_elf` (
  `role_id` bigint(20) unsigned NOT NULL,
  `cells` text DEFAULT NULL,
  `elfs` text DEFAULT NULL,
  `battle_elf_num` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色仙灵收集表';

-- ----------------------------
-- Table structure for role_equip
-- ----------------------------
DROP TABLE IF EXISTS `role_equip`;
CREATE TABLE `role_equip` (
  `role_id` bigint(20) unsigned NOT NULL,
  `wash_free_num` int(11) NOT NULL DEFAULT 0,
  `wash_last_reset_time` int(11) NOT NULL DEFAULT 0,
  `achi_gem` int(11) NOT NULL DEFAULT 0,
  `achi_star` int(11) NOT NULL DEFAULT 0,
  `achi_strengthen` int(11) NOT NULL DEFAULT 0,
  `pos1` text DEFAULT NULL,
  `pos2` text DEFAULT NULL,
  `pos3` text DEFAULT NULL,
  `pos4` text DEFAULT NULL,
  `pos5` text DEFAULT NULL,
  `pos6` text DEFAULT NULL,
  `pos7` text DEFAULT NULL,
  `pos8` text DEFAULT NULL,
  `pos9` text DEFAULT NULL,
  `pos10` text DEFAULT NULL,
  `pos11` text DEFAULT NULL,
  `pos12` text DEFAULT NULL,
  `pos13` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色穿戴装备表';

-- ----------------------------
-- Table structure for role_equip_smelter
-- ----------------------------
DROP TABLE IF EXISTS `role_equip_smelter`;
CREATE TABLE `role_equip_smelter` (
  `id` bigint(20) NOT NULL DEFAULT 0 COMMENT 'role_id',
  `exp` int(11) NOT NULL DEFAULT 0 COMMENT '经验',
  `level` int(11) NOT NULL DEFAULT 0 COMMENT '等级',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_escort
-- ----------------------------
DROP TABLE IF EXISTS `role_escort`;
CREATE TABLE `role_escort` (
  `role_id` bigint(20) NOT NULL,
  `escort_id` int(11) NOT NULL DEFAULT 0,
  `today_accept_num` tinyint(3) NOT NULL DEFAULT 0,
  `last_reset_time` int(11) NOT NULL DEFAULT 0,
  `events` text DEFAULT NULL,
  `event_loop_times` tinyint(3) NOT NULL DEFAULT 0,
  `escort_preview_id` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='玩家运镖信息表';

-- ----------------------------
-- Table structure for role_fate
-- ----------------------------
DROP TABLE IF EXISTS `role_fate`;
CREATE TABLE `role_fate` (
  `role_id` bigint(20) NOT NULL,
  `land_stone` int(11) unsigned DEFAULT 0,
  `land_debris` int(11) unsigned DEFAULT 0,
  `land_grids` text DEFAULT NULL,
  `land_bag` text DEFAULT NULL,
  `sky_stone` int(11) unsigned DEFAULT 0,
  `sky_debris` int(11) unsigned DEFAULT 0,
  `sky_grids` text DEFAULT NULL,
  `sky_bag` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='符文';

-- ----------------------------
-- Table structure for role_five_element
-- ----------------------------
DROP TABLE IF EXISTS `role_five_element`;
CREATE TABLE `role_five_element` (
  `role_id` bigint(20) unsigned NOT NULL COMMENT '玩家id',
  `skilled_list` text NOT NULL COMMENT '已获得的技能列表',
  `skilling_list` text NOT NULL COMMENT '正在学习的技能列表',
  `missioned_list` text NOT NULL COMMENT '已完成任务列表',
  `missioning_list` text NOT NULL COMMENT '正在进行中的任务列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='五行秘技玩家表';

-- ----------------------------
-- Table structure for role_friend
-- ----------------------------
DROP TABLE IF EXISTS `role_friend`;
CREATE TABLE `role_friend` (
  `role_id` bigint(20) NOT NULL,
  `friends` text DEFAULT NULL,
  `applyers` text DEFAULT NULL,
  `strangers` text DEFAULT NULL,
  `blacks` text DEFAULT NULL,
  `role_friend_list` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_function_preview
-- ----------------------------
DROP TABLE IF EXISTS `role_function_preview`;
CREATE TABLE `role_function_preview` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `get_reward_list` varchar(256) NOT NULL DEFAULT '0' COMMENT '已领取奖励id列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_gang
-- ----------------------------
DROP TABLE IF EXISTS `role_gang`;
CREATE TABLE `role_gang` (
  `role_id` bigint(20) NOT NULL COMMENT '角色id',
  `gang_id` bigint(20) DEFAULT NULL COMMENT '集团id',
  `gang_contribution` int(11) DEFAULT NULL COMMENT '集团贡献',
  `gang_contribution_tot` bigint(20) DEFAULT NULL COMMENT '累计集团贡献',
  `gang_store_point` int(11) DEFAULT NULL COMMENT '集团仓库积分',
  `gang_skill_info` varchar(1024) NOT NULL DEFAULT '[]' COMMENT '集团技能',
  `is_daily_welfare_received` smallint(4) DEFAULT 0 COMMENT '每日工资是否领取',
  `join_gang_time` int(11) DEFAULT NULL COMMENT '进集团时间',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_general_code
-- ----------------------------
DROP TABLE IF EXISTS `role_general_code`;
CREATE TABLE `role_general_code` (
  `role_id` bigint(20) unsigned NOT NULL,
  `used_codes` varchar(255) NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_grow
-- ----------------------------
DROP TABLE IF EXISTS `role_grow`;
CREATE TABLE `role_grow` (
  `role_id` bigint(20) NOT NULL COMMENT '玩家id',
  `dead_line` int(11) DEFAULT NULL COMMENT '截止时间戳',
  `score` int(11) NOT NULL COMMENT '已累计分数',
  `activity_data` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `finished_list` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '已完成列表',
  `already_get_list` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '已领奖列表',
  `points_reward_list` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '总成就领取记录',
  `is_auto_give_reward` int(11) DEFAULT 0 COMMENT '是否已经自动发奖',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='成长之路表';

-- ----------------------------
-- Table structure for role_horse
-- ----------------------------
DROP TABLE IF EXISTS `role_horse`;
CREATE TABLE `role_horse` (
  `role_id` bigint(20) NOT NULL,
  `starranklevel` int(11) NOT NULL DEFAULT 0,
  `starrankexp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `horse_image_in_scene` bigint(20) DEFAULT NULL,
  `change_horse_list` text DEFAULT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='坐骑';

-- ----------------------------
-- Table structure for role_info
-- ----------------------------
DROP TABLE IF EXISTS `role_info`;
CREATE TABLE `role_info` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '角色ID',
  `title_list` text NOT NULL COMMENT '已获得称号列表',
  `buff_list` text DEFAULT NULL COMMENT '角色战斗外BUFF列表',
  `instance_list` text DEFAULT NULL COMMENT '副本信息',
  `concern_list` text DEFAULT NULL COMMENT '关注BOSS列表',
  `marriage_id` bigint(20) DEFAULT 0 COMMENT '结婚id',
  `peak_point` int(11) NOT NULL DEFAULT 1000 COMMENT '巅峰积分点',
  `honor` int(11) NOT NULL DEFAULT 0 COMMENT '荣誉点',
  `state_struct` varchar(64) NOT NULL DEFAULT '0' COMMENT '名望id',
  `setting` varchar(1000) NOT NULL DEFAULT '[]' COMMENT '玩家设置',
  `finish_trans` int(11) NOT NULL DEFAULT 0 COMMENT '玩家已完成条件的转职次数',
  `investment_list` varchar(100) NOT NULL DEFAULT '[]' COMMENT '投资计划列表',
  `fetched_investment_rewards` text DEFAULT NULL COMMENT '已领取的投资计划奖励',
  `month_card` varchar(100) NOT NULL DEFAULT '[]' COMMENT '月卡信息',
  `state_status` varchar(1024) NOT NULL DEFAULT '[]' COMMENT '名望领取信息',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色扩展信息';

-- ----------------------------
-- Table structure for role_invit_map
-- ----------------------------
DROP TABLE IF EXISTS `role_invit_map`;
CREATE TABLE `role_invit_map` (
  `id` bigint(20) NOT NULL DEFAULT 0 COMMENT 'open_id的crc32值',
  `open_id` varchar(128) NOT NULL COMMENT 'open_id',
  `inviter` bigint(20) NOT NULL DEFAULT 0 COMMENT '邀请玩家ID',
  `invit_open_id` varchar(128) NOT NULL COMMENT '邀请玩家open_id',
  `invit_picture` int(11) NOT NULL DEFAULT 0 COMMENT '邀请图片ID',
  `invit_type` int(11) NOT NULL DEFAULT 0 COMMENT '邀请类型',
  PRIMARY KEY (`id`,`open_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_mail
-- ----------------------------
DROP TABLE IF EXISTS `role_mail`;
CREATE TABLE `role_mail` (
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `mail_id_list` text DEFAULT NULL COMMENT '邮件ID列表',
  `global_mail_id` bigint(20) DEFAULT 0 COMMENT '已领取全局邮件ID',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色邮件信息';

-- ----------------------------
-- Table structure for role_mall
-- ----------------------------
DROP TABLE IF EXISTS `role_mall`;
CREATE TABLE `role_mall` (
  `role_id` bigint(20) unsigned NOT NULL,
  `limit_buy_log` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色购买商店道具记录';

-- ----------------------------
-- Table structure for role_marriage_lock
-- ----------------------------
DROP TABLE IF EXISTS `role_marriage_lock`;
CREATE TABLE `role_marriage_lock` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `level` tinyint(3) NOT NULL DEFAULT 0 COMMENT '等级',
  `exp` int(11) NOT NULL DEFAULT 0 COMMENT '当前经验',
  `weared` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_open_server_charge
-- ----------------------------
DROP TABLE IF EXISTS `role_open_server_charge`;
CREATE TABLE `role_open_server_charge` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `point` int(11) NOT NULL DEFAULT 0 COMMENT '点数',
  `rewarded_list` varchar(1024) NOT NULL DEFAULT '' COMMENT '已经领奖的列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_open_service
-- ----------------------------
DROP TABLE IF EXISTS `role_open_service`;
CREATE TABLE `role_open_service` (
  `activity_id` int(11) NOT NULL COMMENT '活动id',
  `data` text COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '内容',
  PRIMARY KEY (`activity_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='开服活动表';

-- ----------------------------
-- Table structure for role_open_service_sort_gang
-- ----------------------------
DROP TABLE IF EXISTS `role_open_service_sort_gang`;
CREATE TABLE `role_open_service_sort_gang` (
  `role_id` bigint(20) NOT NULL,
  `old_rank` int(11) NOT NULL COMMENT '旧排名',
  `old_title` int(11) NOT NULL COMMENT '拆下的称号',
  `is_need_notify` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '是否需要广播',
  `notify_rank` int(11) NOT NULL COMMENT '广播排名'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='集团狂欢表';

-- ----------------------------
-- Table structure for role_pet
-- ----------------------------
DROP TABLE IF EXISTS `role_pet`;
CREATE TABLE `role_pet` (
  `role_id` bigint(20) NOT NULL,
  `pet_id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `starranklevel` int(11) NOT NULL DEFAULT 0,
  `starrankexp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `pet_image_in_scene` bigint(20) DEFAULT NULL,
  `change_pet_list` text DEFAULT NULL,
  `combat` int(11) NOT NULL DEFAULT 0 COMMENT '战斗力',
  `is_active` int(11) NOT NULL DEFAULT 0 COMMENT '是否激活',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='宠物';

-- ----------------------------
-- Table structure for role_phone_info
-- ----------------------------
DROP TABLE IF EXISTS `role_phone_info`;
CREATE TABLE `role_phone_info` (
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `os` varchar(50) DEFAULT NULL,
  `os_version` varchar(50) DEFAULT NULL,
  `memory` varchar(50) DEFAULT NULL,
  `device_name` varchar(50) DEFAULT NULL,
  `device_type` varchar(50) DEFAULT NULL COMMENT 'android|ios|web|pc',
  `device_id` varchar(100) DEFAULT NULL,
  `screen` varchar(50) DEFAULT NULL,
  `mno` varchar(50) DEFAULT NULL,
  `nm` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='玩家设备信息';

-- ----------------------------
-- Table structure for role_pray
-- ----------------------------
DROP TABLE IF EXISTS `role_pray`;
CREATE TABLE `role_pray` (
  `role_id` bigint(20) NOT NULL DEFAULT 0,
  `free_coin_pray_time` int(11) DEFAULT 0 COMMENT '下次免费祈福时间',
  `coin_pray_times` int(11) DEFAULT 0 COMMENT '铜币祈福次数',
  `exp_pray_times` int(11) DEFAULT 0 COMMENT '经验祈福次数',
  `free_exp_pray_time` int(11) DEFAULT 0 COMMENT '下次免费经验祈福时间',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='祈福';

-- ----------------------------
-- Table structure for role_sale_info
-- ----------------------------
DROP TABLE IF EXISTS `role_sale_info`;
CREATE TABLE `role_sale_info` (
  `role_id` bigint(11) NOT NULL COMMENT '玩家id',
  `saling_list` text NOT NULL COMMENT '当前出售列表',
  `want_list` text NOT NULL COMMENT '当前求购列表',
  `assigned_list` text NOT NULL COMMENT '指派给自己购买的订单',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_score
-- ----------------------------
DROP TABLE IF EXISTS `role_score`;
CREATE TABLE `role_score` (
  `role_id` bigint(20) NOT NULL,
  `score_list` text COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Table structure for role_share
-- ----------------------------
DROP TABLE IF EXISTS `role_share`;
CREATE TABLE `role_share` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `last_reset_time` int(11) DEFAULT 0 COMMENT '最后一次重置时间',
  `share_tot_cnt` bigint(20) DEFAULT 0 COMMENT '分享累计次数',
  `share_tot_cnt_awards` text DEFAULT NULL COMMENT '已领取的累计分享奖励',
  `share_daily_cnt` smallint(5) DEFAULT 0 COMMENT '每日分享总次数',
  `share_daily_roles` text NOT NULL COMMENT '每日分享成功的玩家数',
  `share_award_status` tinyint(1) DEFAULT 0 COMMENT '分享按钮状态 0-分享 1-领奖',
  `share_remain_cnt` tinyint(1) DEFAULT 0 COMMENT '分享领奖剩余次数',
  `share_remain_time` int(11) DEFAULT 0 COMMENT '下次剩余次数加满的时间',
  `invit_tot_cnt_award_id` int(11) DEFAULT 0 COMMENT '下次领取的邀请累计奖励ID',
  `invit_roles` text DEFAULT NULL COMMENT '邀请玩家列表',
  `invit_level_roles` text DEFAULT NULL COMMENT '邀请玩家达到指定等级列表',
  `invit_recharge_awards` text DEFAULT NULL COMMENT '邀请玩家回馈充值奖励列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_skill
-- ----------------------------
DROP TABLE IF EXISTS `role_skill`;
CREATE TABLE `role_skill` (
  `role_id` bigint(20) unsigned NOT NULL,
  `skill_list` text DEFAULT NULL,
  `auto_use_list` varchar(500) NOT NULL DEFAULT '[]' COMMENT '挂机自动释放技能顺序',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色技能';

-- ----------------------------
-- Table structure for role_soul_equip_info
-- ----------------------------
DROP TABLE IF EXISTS `role_soul_equip_info`;
CREATE TABLE `role_soul_equip_info` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `essence` int(11) NOT NULL DEFAULT 0 COMMENT '精华数量',
  `juhun` int(11) NOT NULL DEFAULT 0 COMMENT '聚魂石数量',
  `shenhun` int(11) NOT NULL DEFAULT 0 COMMENT '神魂石数量',
  `auto_decompose` tinyint(1) NOT NULL DEFAULT 1 COMMENT '自动分解标志',
  `cells` text NOT NULL COMMENT '道具列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_soul_equip_wear
-- ----------------------------
DROP TABLE IF EXISTS `role_soul_equip_wear`;
CREATE TABLE `role_soul_equip_wear` (
  `role_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `soul_site_1` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置1',
  `soul_site_2` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置2',
  `soul_site_3` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置3',
  `soul_site_4` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置4',
  `soul_site_5` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置5',
  `soul_site_6` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置6',
  `soul_site_7` bigint(20) NOT NULL DEFAULT 0 COMMENT '位置7',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_squire
-- ----------------------------
DROP TABLE IF EXISTS `role_squire`;
CREATE TABLE `role_squire` (
  `role_id` bigint(20) NOT NULL COMMENT '玩家id',
  `cells` text NOT NULL COMMENT '战队背包',
  `members` text NOT NULL COMMENT '战队成员',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='战队表';

-- ----------------------------
-- Table structure for role_store
-- ----------------------------
DROP TABLE IF EXISTS `role_store`;
CREATE TABLE `role_store` (
  `role_id` bigint(11) NOT NULL,
  `extra_cell_num` int(11) NOT NULL DEFAULT 0,
  `cells` text DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='个人仓库';

-- ----------------------------
-- Table structure for role_talisman
-- ----------------------------
DROP TABLE IF EXISTS `role_talisman`;
CREATE TABLE `role_talisman` (
  `role_id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `talisman_image_in_scene` bigint(20) DEFAULT NULL,
  `change_talisman_list` text DEFAULT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='法宝';

-- ----------------------------
-- Table structure for role_task
-- ----------------------------
DROP TABLE IF EXISTS `role_task`;
CREATE TABLE `role_task` (
  `role_id` bigint(11) NOT NULL,
  `main_task` text DEFAULT NULL,
  `main_finish_task` text DEFAULT NULL,
  `branch_task` text DEFAULT NULL,
  `branch_finish_task` text DEFAULT NULL,
  `bounty_reset_time` int(11) DEFAULT 0,
  `bounty_todo_task_id` int(11) DEFAULT 0,
  `bounty_task` text DEFAULT NULL,
  `bounty_finish_task` text DEFAULT NULL,
  `gang_reset_time` int(11) DEFAULT 0,
  `gang_todo_task_id` int(11) DEFAULT 0,
  `gang_task` text DEFAULT NULL,
  `gang_finish_task` text DEFAULT NULL,
  `trans_task` text NOT NULL,
  `trans_finish_task` text NOT NULL,
  `novice_task` text NOT NULL COMMENT '进行中的新手任务',
  `novice_finish_task` text NOT NULL COMMENT '已完成的新手任务',
  `guide_step` varchar(32) NOT NULL DEFAULT '{data_novice_step,0,0}' COMMENT '新手引导步骤',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户任务表';

-- ----------------------------
-- Table structure for role_title
-- ----------------------------
DROP TABLE IF EXISTS `role_title`;
CREATE TABLE `role_title` (
  `role_id` bigint(11) NOT NULL DEFAULT 0,
  `obtained` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_treasure
-- ----------------------------
DROP TABLE IF EXISTS `role_treasure`;
CREATE TABLE `role_treasure` (
  `role_id` bigint(11) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `integral` mediumint(8) NOT NULL DEFAULT 0 COMMENT '寻宝积分',
  `free_rune_time` int(11) NOT NULL DEFAULT 0 COMMENT '符文免费寻宝时间',
  `equipment_record` text NOT NULL COMMENT '装备寻宝记录',
  `peakness_record` text NOT NULL COMMENT '巅峰寻宝记录',
  `rune_record` text NOT NULL,
  `artifact_record` text NOT NULL,
  `supermacy_record` text NOT NULL,
  `time_limit_record` text NOT NULL,
  `time_limit_integral` int(32) NOT NULL DEFAULT 0,
  `free_time_limit_time` int(32) NOT NULL DEFAULT 0,
  `times` text NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_vip
-- ----------------------------
DROP TABLE IF EXISTS `role_vip`;
CREATE TABLE `role_vip` (
  `role_id` bigint(20) NOT NULL,
  `vip_lv` int(11) NOT NULL DEFAULT 0,
  `vip_exp` int(11) NOT NULL DEFAULT 0,
  `timeout` int(11) NOT NULL DEFAULT 0,
  `last_online_add_exp_time` int(11) NOT NULL DEFAULT 0,
  `acc_consume_gold` int(11) NOT NULL DEFAULT 0 COMMENT '累计消费元宝数',
  `current_vip_card` int(11) NOT NULL DEFAULT 0 COMMENT '当前使用的VIP卡',
  `vip_card_4_days` int(11) NOT NULL DEFAULT 0,
  `vip_gift_package` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色VIP信息';

-- ----------------------------
-- Table structure for role_weapon
-- ----------------------------
DROP TABLE IF EXISTS `role_weapon`;
CREATE TABLE `role_weapon` (
  `role_id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `weapon_image_in_scene` bigint(20) DEFAULT NULL,
  `change_weapon_list` text DEFAULT NULL,
  `is_active` int(11) NOT NUll DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='神兵';

-- ----------------------------
-- Table structure for role_welfare
-- ----------------------------
DROP TABLE IF EXISTS `role_welfare`;
CREATE TABLE `role_welfare` (
  `role_id` bigint(20) NOT NULL,
  `sign_in_days` varchar(1000) NOT NULL DEFAULT '[]' COMMENT '本月已签到日期',
  `acc_sign_in_received_reward` varchar(500) DEFAULT '[]' COMMENT '已领取的累积签到奖励',
  `last_sign_in_date` varchar(255) DEFAULT '' COMMENT '上次签到时间',
  `seven_login_days` tinyint(3) DEFAULT 0 COMMENT '七天登录天数',
  `seven_login_received_reward` varchar(255) DEFAULT '[]' COMMENT '已领取的七天登录奖励',
  `level_spurt_received_reward` varchar(500) DEFAULT '[]' COMMENT '已领取的冲级礼包',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='玩家福利表';

-- ----------------------------
-- Table structure for role_wing
-- ----------------------------
DROP TABLE IF EXISTS `role_wing`;
CREATE TABLE `role_wing` (
  `role_id` bigint(20) NOT NULL,
  `level` int(11) NOT NULL DEFAULT 0,
  `exp` int(11) NOT NULL DEFAULT 0,
  `skills` varchar(255) NOT NULL DEFAULT '[]',
  `wing_image_in_scene` bigint(20) DEFAULT NULL,
  `change_wing_list` text DEFAULT NULL,
  `is_active` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='翅膀';

-- ----------------------------
-- Table structure for role_xunbao_bag
-- ----------------------------
DROP TABLE IF EXISTS `role_xunbao_bag`;
CREATE TABLE `role_xunbao_bag` (
  `role_id` bigint(11) NOT NULL DEFAULT 0 COMMENT '玩家id',
  `equip_cells` text NOT NULL COMMENT '装备寻宝仓库',
  `rune_cells` text NOT NULL COMMENT '符文寻宝仓库',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for sale_info
-- ----------------------------
DROP TABLE IF EXISTS `sale_info`;
CREATE TABLE `sale_info` (
  `sale_id` bigint(20) NOT NULL COMMENT '订单id',
  `status` tinyint(3) NOT NULL DEFAULT 0 COMMENT '订单状态',
  `type` tinyint(1) NOT NULL DEFAULT 0 COMMENT '订单类型',
  `item_id` int(11) NOT NULL DEFAULT 0 COMMENT '物品id',
  `item_uniq_id` bigint(20) NOT NULL DEFAULT 0 COMMENT '物品唯一id(适用于装备)',
  `item_num` int(11) NOT NULL DEFAULT 0 COMMENT '商品数量',
  `total_price` int(11) NOT NULL DEFAULT 0 COMMENT '总价',
  `market_id` int(11) NOT NULL DEFAULT 0 COMMENT '商品目录id',
  `owner_id` bigint(11) NOT NULL DEFAULT 0 COMMENT '拥有者id',
  `passwd` varchar(6) DEFAULT NULL COMMENT '订单密码',
  `putaway_time` int(11) NOT NULL DEFAULT 0 COMMENT '上架时间',
  `expire_time` int(11) NOT NULL DEFAULT 0 COMMENT '到期时间',
  `sell_ref` text DEFAULT NULL COMMENT '到期引用',
  `flag` int(11) NOT NULL DEFAULT 1 COMMENT '系统订单|玩家订单',
  PRIMARY KEY (`sale_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for seven_day_result
-- ----------------------------
DROP TABLE IF EXISTS `seven_day_result`;
CREATE TABLE `seven_day_result` (
  `id` tinyint(3) NOT NULL DEFAULT 0 COMMENT '活动id',
  `result` text DEFAULT NULL COMMENT '奖励信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for update_annos
-- ----------------------------
DROP TABLE IF EXISTS `update_annos`;
CREATE TABLE `update_annos` (
  `id` smallint(5) NOT NULL DEFAULT 0 COMMENT '公告id',
  `start_time` int(11) NOT NULL DEFAULT 0 COMMENT '公告开始时间',
  `end_time` int(11) NOT NULL DEFAULT 0 COMMENT '公告结束时间',
  `platform` varchar(15) NOT NULL DEFAULT '' COMMENT '平台',
  `title` varchar(256) NOT NULL DEFAULT '' COMMENT '标题',
  `content` text NOT NULL COMMENT '公告内容',
  `reward_items` varchar(256) NOT NULL DEFAULT '' COMMENT '道具奖励',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

SET FOREIGN_KEY_CHECKS = 1;

-- ----------------------------
-- Table structure for role_answer
-- sql:2019122601
-- ----------------------------
DROP TABLE IF EXISTS `role_answer`;
CREATE TABLE `role_answer` (
  `role_id` bigint(20) unsigned NOT NULL,
  `num` int(11) DEFAULT NULL COMMENT '上次答题编号',
  `time` int(11) DEFAULT NULL COMMENT '上次答题时间戳',
  `points` int(11) DEFAULT NULL COMMENT '当日积分',
  `rewards` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '已领奖列表',
  `is_detached` int(11) DEFAULT NULL COMMENT '是否断线',
  `is_finish` int(11) DEFAULT NULL COMMENT '是否已结束',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ----------------------------
-- Table structure for role_daily_activities
-- sql:2019122701
-- ----------------------------
DROP TABLE IF EXISTS `role_daily_activities`;
CREATE TABLE `role_daily_activities` (
  `role_id` bigint(20) unsigned NOT NULL,
  `cumulative_online` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '累计在线',
  `daily_special` varchar(64) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT '每日特惠',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 防沉迷功能
-- sql:2020010101
ALTER TABLE `role_attribute` ADD COLUMN `day_anti_addicition` int(11) NOT NULL DEFAULT 0 COMMENT '防沉迷在线时长' AFTER `day_online_duration`;

-- ----------------------------
-- Table structure for role_boss_arrival
-- sql:2020010301
-- ----------------------------
DROP TABLE IF EXISTS `role_boss_arrival`;
CREATE TABLE `role_boss_arrival` (
  `role_id` bigint(20) unsigned NOT NULL,
  `remain_times` smallint(5) unsigned NOT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 红颜新增约会CD
-- sql:2020010401
ALTER TABLE `role_beauty` ADD COLUMN `next_appointment_time` int(11) NOT NULL DEFAULT 0 COMMENT '红颜下次可约会时间' AFTER `doll_machine`;


-- 成长之路
-- sql:2020010601
ALTER TABLE `role_grow` modify column finished_list varchar(256);
ALTER TABLE `role_grow` modify column already_get_list varchar(256);

-- 福利码
-- sql:2020011101
DROP TABLE IF EXISTS `excode`;
CREATE TABLE `excode` (
  `code` CHAR(10) NOT NULL COMMENT '激活码',
  `type` int(11) NOT NULL DEFAULT 0 COMMENT '类型',
  `user` bigint(20) NOT NULL DEFAULT 0 COMMENT '领取用户id',
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `role_excode`;
CREATE TABLE `role_excode` (
  `role_id` CHAR(10) NOT NULL COMMENT '用户id',
  `use_list` varchar(56) NOT NULL COMMENT '领取列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- 充值表
DROP TABLE IF EXISTS `order_quick`;
CREATE TABLE `order_quick` (
  `order_id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `channel` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `channel_uid` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `game_order` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pay_time` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `is_test` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 充值表
DROP TABLE IF EXISTS `order_quick_game`;
CREATE TABLE `order_quick_game` (
  `order_id` char(26) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `uid` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `login_name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `out_order_no` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pay_time` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 充值表
DROP TABLE IF EXISTS `order_vivo`;
CREATE TABLE `order_vivo` (
  `order_id` char(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `vivo_order_id` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trade_type` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `trade_status` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pay_time` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `cp_id` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `uid`  varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ext_info` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 充值表
DROP TABLE IF EXISTS `order_oppo`;
CREATE TABLE `order_oppo` (
  `order_id` char(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `oppo_order_id` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `count` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `ext_info` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 充值表
DROP TABLE IF EXISTS `order_biz`;
CREATE TABLE `order_biz` (
  `order_id` char(128) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `biz_order_id` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `pay_time` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

DROP TABLE IF EXISTS `role_ad_data`;
CREATE TABLE `role_ad_data` (
  `role_id` CHAR(10) NOT NULL COMMENT '用户id',
  `openid` varchar(128) NOT NULL COMMENT 'openid',
  `url`  varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_sale_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_sale_info`;
CREATE TABLE `sys_sale_info` (
  `id` int(11) NOT NULL COMMENT '商品id',
  `saling_list` varchar(2014) NOT NULL DEFAULT '[]' COMMENT '当前出售列表',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `flash_sale`;
CREATE TABLE `flash_sale` (
  `role_id` int(11) NOT NULL COMMENT '玩家id',
  `showing_list` text NOT NULL COMMENT '正在抢购的礼包列表',
  `invalid_list` text NOT NULL COMMENT '已失效未购买列表',
  `purchased_list` text NOT NULL COMMENT '已购买礼包列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `role_flash_service`;
CREATE TABLE `role_flash_service` (
  `role_id` int(11) NOT NULL COMMENT '玩家id',
  `data` text NOT NULL COMMENT '活动数据',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `role_seven_day_task`;
CREATE TABLE `role_seven_day_task` (
  `role_id` int(11) NOT NULL COMMENT '玩家id',
  `task_list` text NOT NULL COMMENT '进行中的任务列表',
  `finish_list` text NOT NULL COMMENT '已完成任务id列表',
  `reward_list` text NOT NULL COMMENT '已领奖任务id列表',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `role_other_record`;
CREATE TABLE `role_other_record` (
  `role_id` int(11) NOT NULL COMMENT '玩家id',
  `role_ai_chat_data` text NOT NULL COMMENT 'AI聊天数据记录',
  `role_login_record` text NOT NULL COMMENT '玩家登录记录',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `order_map_request`;
CREATE TABLE `order_map_request` (
  `order_id` varchar(128) NOT NULL DEFAULT "",
  `request_id` bigint(20) unsigned NOT NULL,
  PRIMARY KEY (`order_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for role_cat
-- sql:2020010301
-- ----------------------------
DROP TABLE IF EXISTS `role_cat`;
CREATE TABLE `role_cat` (
  `role_id` bigint(20) unsigned NOT NULL,
  `gold_num` bigint(20) unsigned NOT NULL,
  `cat_times` varchar(2014) NOT NULL DEFAULT '[]',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
