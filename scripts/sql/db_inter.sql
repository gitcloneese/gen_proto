/*
 Navicat Premium Data Transfer

 Source Server         : root@192.168.0.12
 Source Server Type    : MariaDB
 Source Server Version : 100313
 Source Host           : 192.168.0.12:3306
 Source Schema         : y_game_inter

 Target Server Type    : MariaDB
 Target Server Version : 100313
 File Encoding         : 65001

 Date: 30/09/2019 10:22:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for boss_drop
-- ----------------------------
DROP TABLE IF EXISTS `boss_drop`;
CREATE TABLE `boss_drop` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `zone_id` int(11) DEFAULT 0,
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
  `zone_id` int(11) DEFAULT 0,
  `instance_id` int(11) DEFAULT 0 COMMENT '副本ID',
  `monster_id` int(11) DEFAULT 0 COMMENT '怪物ID',
  `role_id` bigint(20) DEFAULT 0 COMMENT '角色ID',
  `time` int(11) DEFAULT 0 COMMENT '击杀时间',
  PRIMARY KEY (`id`),
  KEY `ix_time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for game_node
-- ----------------------------
DROP TABLE IF EXISTS `game_node`;
CREATE TABLE `game_node` (
  `server_id` int(11) NOT NULL DEFAULT 0 COMMENT '服务器ID',
  `node_name` varchar(255) DEFAULT NULL,
  `zone_id` int(11) DEFAULT 0 COMMENT '区域ID',
  `open_server_time` varchar(100) DEFAULT NULL COMMENT '开服时间',
  `is_main_server` int(11) DEFAULT 0 COMMENT '合服后是否为主服,0-否,1-是',
  `best_combat_list` varchar(1000) DEFAULT '[]' COMMENT '本区域各职业第一名',
  PRIMARY KEY (`server_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='游戏服务器';

-- ----------------------------
-- Table structure for inter_rank
-- ----------------------------
DROP TABLE IF EXISTS `inter_rank`;
CREATE TABLE `inter_rank` (
  `id` bigint(20) NOT NULL DEFAULT 0,
  `rank_list` text NOT NULL COMMENT '排行榜数据',
  `sort_by` varchar(255) NOT NULL DEFAULT 'desc' COMMENT '排序方式,asc-升序,desc-降序',
  `capacity` int(11) NOT NULL DEFAULT 0 COMMENT '容量',
  `len` int(11) NOT NULL DEFAULT 0 COMMENT '当前数量',
  `show_top_n` int(11) NOT NULL DEFAULT 0 COMMENT '显示前N名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='排行榜';

SET FOREIGN_KEY_CHECKS = 1;
