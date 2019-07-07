CREATE DATABASE `credits`;

-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- for creating the users table
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `firstName` varchar(255) DEFAULT NULL,
  `lastName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
--   `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`userId`)
);

-- for creating the roles table only
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `roleId` int(11) NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`roleId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  -- for creating the reimbursements table
DROP TABLE IF EXISTS `reimbursements`;
CREATE TABLE `reimbursements` (
  `reimbursementId` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(255) DEFAULT NULL,
  `amount` varchar(255) DEFAULT NULL,
  `dateSubmitted` varchar(255) DEFAULT NULL,
  `dateResolved` int(255) DEFAULT NULL,
  `description` int(255) DEFAULT NULL,
  `resolver` int(255) DEFAULT NULL,
  `status` int(255) DEFAULT NULL,
  `type` int(10) DEFAULT NULL,
  PRIMARY KEY (`reimbursementId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementStatuses table
DROP TABLE IF EXISTS `reimbursementStatuses`;
CREATE TABLE `reimbursementStatuses` (
  `statusId` int(10) NOT NULL AUTO_INCREMENT,
  `status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`statusId`)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementTypes table
DROP TABLE IF EXISTS `reimbursementTypes`;
CREATE TABLE `reimbursementTypes` (
  `typeId` int(10) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`typeId`)
);