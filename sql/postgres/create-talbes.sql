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
  role varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

-- for creating the users table
CREATE TABLE users (
  _id SERIAL PRIMARY KEY,
  username varchar(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  role_id int references roles(_id) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


  -- for creating the reimbursementStatuses table
CREATE TABLE reimbursement_statuses (
  _id SERIAL PRIMARY KEY,
  status varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursementTypes table
CREATE TABLE reimbursement_types (
  _id SERIAL PRIMARY KEY,
  type varchar(255) NOT NULL
);

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

  -- for creating the reimbursements table
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
