/*
 Navicat MySQL Data Transfer

 Source Server         : wangshubo.club
 Source Server Type    : MariaDB
 Source Server Version : 50560
 Source Host           : 47.103.15.157:3366
 Source Schema         : doumingbai

 Target Server Type    : MariaDB
 Target Server Version : 50560
 File Encoding         : 65001

 Date: 10/12/2019 09:24:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for demand_table
-- ----------------------------
DROP TABLE IF EXISTS `demand_table`;
CREATE TABLE `demand_table`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `phonenum` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `qqnum` varchar(11) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `username` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `demand_content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `current_time` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `end_time` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `is_finished` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `demand_content`(`demand_content`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 121 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

SET FOREIGN_KEY_CHECKS = 1;
