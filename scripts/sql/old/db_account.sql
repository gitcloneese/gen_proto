DROP TABLE IF EXISTS `account_info`;
CREATE TABLE `account_info` (
  `account` varchar(64) NOT NULL,
  `server_id` int(11) NOT NULL,
  `role_id` bigint(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `class_model` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`account`,`server_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `account_info` ADD COLUMN `platform` INT NOT NULL DEFAULT '0'  AFTER `account` , 
CHANGE COLUMN `role_id` `role_id` BIGINT(20) NOT NULL  FIRST 
, DROP PRIMARY KEY 
, ADD PRIMARY KEY (`role_id`, `account`, `server_id`) ;


DROP TABLE IF EXISTS `account_login`;
CREATE TABLE `account_login` (
  `token` varchar(40) NOT NULL DEFAULT '',
  `platform` int(11) NOT NULL DEFAULT '0' COMMENT '平台ID',
  `account` varchar(50) NOT NULL DEFAULT '' COMMENT '平台账号',
  `time` int(11) NOT NULL DEFAULT '0' COMMENT '登录时间',
  `client_ip` varchar(60) DEFAULT '' COMMENT '客户端IP',
  `user_agent` varchar(1000) DEFAULT '' COMMENT '客户端浏览器信息',
  `extra` varchar(1000) DEFAULT '' COMMENT '扩展信息',
  PRIMARY KEY (`token`),
  KEY `ix_time` (`time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='登录信息表';

ALTER TABLE `account_login` CHANGE COLUMN `account` `account` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL DEFAULT '' COMMENT '平台账号'  ;
ALTER TABLE `account_info` CHANGE COLUMN `account` `account` VARCHAR(50) CHARACTER SET 'utf8' COLLATE 'utf8_bin' NOT NULL DEFAULT '' COMMENT '平台账号'  ;

DROP TABLE IF EXISTS `alpha_level`;
CREATE TABLE `alpha_level` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` int(11) DEFAULT '0' COMMENT '平台',
  `account` varchar(100) DEFAULT '' COMMENT '账号',
  `max_level` int(11) DEFAULT '0' COMMENT '最大等级',
  `alpha_server_id` int(11) DEFAULT '0' COMMENT '封测服务器ID',
  `gift_server_id` int(11) DEFAULT '0' COMMENT '领取奖励的服务器ID',
  `gift_role_id` bigint(11) DEFAULT '0' COMMENT '领奖的玩家角色ID',
  PRIMARY KEY (`Id`),
  KEY `ix_platform_account` (`platform`,`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='封测账号等级';

DROP TABLE IF EXISTS `alpha_rank`;
CREATE TABLE `alpha_rank` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` int(11) DEFAULT '0' COMMENT '平台',
  `account` varchar(100) DEFAULT '' COMMENT '账号',
  `rank_type` int(11) DEFAULT '0' COMMENT '排行榜类型',
  `rank` int(11) DEFAULT '0' COMMENT '排名',
  `alpha_server_id` int(11) DEFAULT '0' COMMENT '封测服务器ID',
  `gift_server_id` int(11) DEFAULT '0' COMMENT '领奖服务器ID',
  `gift_role_id` bigint(1) DEFAULT '0' COMMENT '领奖的玩家角色ID',
  PRIMARY KEY (`Id`),
  KEY `ix_platform_account` (`platform`,`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='封测排行榜';

DROP TABLE IF EXISTS `alpha_charge`;
CREATE TABLE `alpha_charge` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `platform` int(11) DEFAULT '0' COMMENT '平台',
  `account` varchar(100) DEFAULT '' COMMENT '账号',
  `alpha_server_id` int(11) DEFAULT '0' COMMENT '封测服务器ID',
  `gold` int(11) DEFAULT '0' COMMENT '元宝数',
  `money` decimal(10,2) DEFAULT '0.00' COMMENT '充值金额',
  `charge_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '充值时间',
  `gift_server_id` int(11) DEFAULT '0' COMMENT '领奖服务器ID',
  `gift_role_id` bigint(1) DEFAULT '0' COMMENT '领奖的玩家角色ID',
  PRIMARY KEY (`Id`),
  KEY `ix_platform_account` (`platform`,`account`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='封测充值';

DROP TABLE IF EXISTS `account_login_log`;
CREATE  TABLE `account_login_log` (
  `account` VARCHAR(50) NOT NULL ,
  `platform` INT NOT NULL ,
  `last_login_time` INT NOT NULL DEFAULT 0 COMMENT '最近登录时间' ,
  `last_server_id` INT NOT NULL DEFAULT 0 COMMENT '最近登录服务器ID' ,
  `last_role_id` BIGINT NOT NULL DEFAULT 0 COMMENT '最近登录角色ID' ,
  PRIMARY KEY (`account`, `platform`) 
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT = '账号登录日志' ;
  
  DROP TABLE IF EXISTS `access_token_log`;
  CREATE  TABLE `access_token_log` (
  `app_id` VARCHAR(50) NOT NULL ,
  `token` varchar(1024) DEFAULT '' COMMENT 'token',
  `last_time` INT NOT NULL DEFAULT 0 COMMENT '最近更新时间' ,
  PRIMARY KEY (`app_id`) 
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT = 'token' ;


DROP TABLE IF EXISTS `serv_info`;
CREATE TABLE `serv_info` (
`id`  int(11) NOT NULL ,
`serv_name`  varchar(50) NOT NULL ,
`zone`  varchar(11) NOT NULL ,
`ip`  varchar(50) NOT NULL ,
`port`  int(11) NOT NULL ,
`if_commend`  int(11) NULL DEFAULT 0 ,
`num`  int(11) NULL DEFAULT 0 ,
`condition`  int(11) NULL DEFAULT 0 ,
`version`  varchar(20) NULL DEFAULT '0.0.0.1' COMMENT '版本号' ,
`trial_server`  int(11) NULL DEFAULT 0 COMMENT '是否体验版 1 是 ，0 不是' ,
`inner_server`  int(11) NULL DEFAULT 0 COMMENT '版本号是否内部服，1是，0不是' ,
`pt`  varchar(20) NULL  COMMENT '渠道号' ,
`tips`  varchar(50) NULL DEFAULT '服务器维护中' COMMENT 'condition=3的时候显示的值' ,
 PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='服务器列表';

  DROP TABLE IF EXISTS `serv_global_data`;
  CREATE  TABLE `serv_global_data` (
  `key` VARCHAR(50) NOT NULL ,
  `value` varchar(1024) DEFAULT '' COMMENT 'token',
  PRIMARY KEY (`key`) 
  ) ENGINE = InnoDB DEFAULT CHARSET = utf8 COMMENT = '全局变量表' ;