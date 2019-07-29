-- for seeding the roles table
INSERT INTO roles VALUES(1, 'finance manager');
INSERT INTO roles VALUES(2, 'admin');
INSERT INTO roles VALUES(3, 'default user');

INSERT INTO reimbursement_statuses(status) VALUES('pending');
INSERT INTO reimbursement_statuses(status) VALUES('approved');
INSERT INTO reimbursement_statuses(status) VALUES('denied');

INSERT INTO reimbursement_statuses VALUES(2, 'approved');
INSERT INTO reimbursement_statuses VALUES(3, 'denied');

INSERT INTO reimbursement_types VALUES(1, 'Lodging');
INSERT INTO reimbursement_types VALUES(2, 'Travel');
INSERT INTO reimbursement_types VALUES(3, 'Food');
INSERT INTO reimbursement_types VALUES(4, 'Other');

-- for seeding the reimbursements table...
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(1, 400, '1983-03-12', '1987-04-15', 'AWS Sol-Arch Ass. Cert.', 1, 2, 2);
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(2, 190, '1998-12-19', null, 'Steak', null, 1, 2);
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(4, 190, '1998-12-19', '2000-06-12', 'Jacket', null, 1, 1);
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(3, 190, '1998-12-19', null, 'Laptop', null, 1, 1);
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(3, 370, '2000-01-14', '2000-04-12', 'Vacation', 1, 3, 2);
INSERT INTO reimbursements (
    author, amount, date_submitted, date_resolved, description, resolver, status, type)
    VALUES(4, 140, '1993-12-19', null, 'Love Offering', null, 1, 3);
INSERT INTO reimbursements(
    author, amount, date_submitted, date_resolved, description, resolver, status, type) 
    VALUES(5, 50, '1993-12-19', null, 'Love Offering', null, 1, 4);



-- for seeding the user table
INSERT INTO users (username, first_name, last_name, email, role_id)
VALUES ('financialLarry', 'finfin', 'Larry', 'Finance', 'fromto@yahoo.com', 1);
INSERT INTO users (username, first_name, last_name, email, role_id)
VALUES ('adminJim', 'adminadmin', 'Jim', 'Admin', 'electionguy_434@yahoo.com', 2);
INSERT INTO users (username, first_name, last_name, email, role_id)
VALUES ('defaultDan', 'defaultdefault', 'Dan', 'Default', 'secretsquirrel96@yahoo.com', 3);
INSERT INTO users (username, first_name, last_name, email, role_id)
VALUES ('user_04', 'patpat', 'Patrick', 'Byrde', 'patkumuji@yahoo.com', 3);
INSERT INTO users (username, first_name, last_name, email, role_id)
VALUES ('sandra', 'sarasara', 'Thommas', 'Ato', 'shirleyj@yahoo.com', 1);

