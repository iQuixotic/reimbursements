DROP DATABASE IF EXISTS credits;
--------------------------------------------------------------------------
CREATE DATABASE credits;

-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- for creating the users table
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  userId SERIAL PRIMARY KEY,
  password varchar(255) NOT NULL,
  firstName varchar(255) NOT NULL,
  lastName varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  role varchar(255) NOT NULL
);

-- for creating the roles table only
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  roleId SERIAL PRIMARY KEY,
  role varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  -- for creating the reimbursements table
DROP TABLE IF EXISTS reimbursements;
CREATE TABLE reimbursements (
  reimbursementId SERIAL PRIMARY KEY,
  author varchar(255) NOT NULL,
  amount int NOT NULL,
  dateSubmitted int NOT NULL,
  dateResolved int NOT NULL,
  description  varchar(255) NOT NULL,
  resolver int NOT NULL,
  status int NOT NULL,
  type int NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementStatuses table
DROP TABLE IF EXISTS reimbursementStatuses;
CREATE TABLE reimbursementStatuses (
  statusId SERIAL PRIMARY KEY,
  status varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementTypes table
DROP TABLE IF EXISTS reimbursementTypes;
CREATE TABLE reimbursementTypes (
  typeId SERIAL PRIMARY KEY,
  type varchar(255) NOT NULL
);