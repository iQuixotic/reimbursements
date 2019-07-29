DROP DATABASE IF EXISTS credits;
--------------------------------------------------------------------------
CREATE DATABASE credits;

DROP TABLE IF EXISTS reimbursements;
DROP TABLE IF EXISTS reimbursement_statuses;
DROP TABLE IF EXISTS reimbursement_types;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS roles;
-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- for creating the roles table only
CREATE TABLE roles (
  _id SERIAL PRIMARY KEY,
  role varchar(100)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

-- for creating the users table
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  username varchar(70) UNIQUE,
  password VARCHAR(255),
  first_name VARCHAR(40),
  last_name VARCHAR(40),
  email VARCHAR(70),
  role_id int references roles(_id)
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  -- for creating the reimbursementStatuses table
CREATE TABLE reimbursement_statuses (
  _id SERIAL PRIMARY KEY,
  status varchar(100) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementTypes table
CREATE TABLE reimbursement_types (
  _id SERIAL PRIMARY KEY,
  type varchar(100) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursements table
CREATE TABLE reimbursements (
  _id SERIAL PRIMARY KEY,
  author int references users(_id),
  amount int,
  date_submitted date,
  date_resolved date,
  description  varchar(255),
  resolver int references users(_id),
  status int references reimbursement_statuses(_id),
  type int references reimbursement_types(_id)
);
