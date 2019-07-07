CREATE DATABASE `credits`;

-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- for creating the user table
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
--   `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

-- for creating the role table only
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `roleId` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  -- for creating the reimbursement table
DROP TABLE IF EXISTS `reimbursement`;
CREATE TABLE `reimbursement` (
  `reimbursementId` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `dateSubmitted` varchar(255) DEFAULT NULL,
  `dateResolved` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `resolver` varchar(255) DEFAULT NULL,
--   `status` int(255) DEFAULT NULL,
--   `type` int(10) DEFAULT NULL,
  PRIMARY KEY (`reimbursementId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementStatus table
DROP TABLE IF EXISTS `reimbursementStatus`;
CREATE TABLE `reimbursementStatus` (
  `statusId` int(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`statusId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementType table
DROP TABLE IF EXISTS `reimbursementType`;
CREATE TABLE `reimbursementType` (
  `typeId` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
);