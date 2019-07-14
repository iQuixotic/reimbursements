DROP DATABASE IF EXISTS credits;
--------------------------------------------------------------------------
CREATE DATABASE credits;

-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

-- for creating the roles table only
DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  _id SERIAL PRIMARY KEY,
  role varchar(255) NOT NULL
);

-- for creating the users table
DROP TABLE IF EXISTS users;
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role_id int references roles(_id) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  -- for creating the reimbursementStatuses table
DROP TABLE IF EXISTS reimbursement_statuses;
CREATE TABLE reimbursement_statuses (
  _id SERIAL PRIMARY KEY,
  status varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementTypes table
DROP TABLE IF EXISTS reimbursement_types;
CREATE TABLE reimbursement_types (
  _id SERIAL PRIMARY KEY,
  type varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursements table
DROP TABLE IF EXISTS reimbursements;
CREATE TABLE reimbursements (
  _id SERIAL PRIMARY KEY,
  author int references users(_id),
  amount int NOT NULL,
  date_submitted date NOT NULL,
  date_resolved date,
  description  varchar(255) NOT NULL,
  resolver int references users(_id),
  status int references reimbursement_statuses(_id),
  type int references reimbursement_types(_id),
);
