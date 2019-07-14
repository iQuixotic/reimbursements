-- for seeding the roles table
INSERT INTO roles VALUES(1, 'finance manager');
INSERT INTO roles VALUES(2, 'admin');
INSERT INTO roles VALUES(3, 'default user');

-- for seeding the user table
INSERT INTO users VALUES (1, 'user1', 'tomtom', 'Larry', 'Cripsmith', 'fromto@yahoo.com', 2);
INSERT INTO users VALUES (2, 'user2', 'timtim', 'Crommery', 'Gobbard', 'electionguy_434@yahoo.com', 2);
INSERT INTO users VALUES (3, 'user3', 'tisktisk', 'Terija', 'Tsu', 'secretsquirrel96@yahoo.com', 3);
INSERT INTO users VALUES (4, '004', 'patpat', 'Patrick', 'Byrde', 'patkumuji@yahoo.com', 3);
INSERT INTO users VALUES (5, 'sandra', 'sarasara', 'Shirley', 'Johnson', 'shirleyj@yahoo.com', 1);


INSERT INTO reimbursement_statuses VALUES(1, 'pending');
INSERT INTO reimbursement_statuses VALUES(2, 'approved');
INSERT INTO reimbursement_statuses VALUES(3, 'denied');

INSERT INTO reimbursement_types VALUES(1, 'Lodging');
INSERT INTO reimbursement_types VALUES(2, 'Travel');
INSERT INTO reimbursement_types VALUES(3, 'Food');
INSERT INTO reimbursement_types VALUES(4, 'Other');

-- for seeding the reimbursements table...
INSERT INTO reimbursements VALUES(1, 1, 400, '1983-03-12', '1987-04-15', 'AWS Sol-Arch Ass. Cert.', 1, 2, 2);
INSERT INTO reimbursements VALUES(2, 2, 190, '1998-12-19', null, 'Love Offering', null, 1, 4);
INSERT INTO reimbursements VALUES(3, 3, 370, '2000-01-1', '2000-04-12', 'Vacation', 1, 1, 4);
INSERT INTO reimbursements VALUES(4, 4, 140, '1993-12-19', null, 'Love Offering', null, 1, 4);
INSERT INTO reimbursements VALUES(5, 5, 50, '1993-12-19', null, 'Love Offering', null, 1, 4);
