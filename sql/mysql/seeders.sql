/*
    NOTE: I'm not specifying the column names as such: 
    ---------------------------------------------------------------
    ----INSERT INTO table_name (column1, column2, column3, ...)----
    ----VALUES (value1, value2, value3, ...);----------------------
    ---------------------------------------------------------------
        
    REASON: because I will be populating ALL fields in each table,
        thus making the more verbose syntax unnecessary.
*/

-- for seeding the user table
INSERT INTO users VALUES (1, 'tomtom', 'Larry', 'Cripsmith', 'fromto@yahoo.com', 4);
INSERT INTO users VALUES (2, 'timtim', 'Crommery', 'Gobbard', 'electionguy_434@yahoo.com', 2);
INSERT INTO users VALUES (3, 'tisktisk', 'Terija', 'Tsu', 'secretsquirrel96@yahoo.com', 5);
INSERT INTO users VALUES (4, 'patpat', 'Patrick', 'Byrde', 'patkumuji@yahoo.com', 3);
INSERT INTO users VALUES (5, 'sarasara', 'Shirley', 'Johnson', 'shirleyj@yahoo.com', 1);

-- for seeding the role table
INSERT INTO roles VALUES (1, 'Manager');
INSERT INTO roles VALUES (2, 'Scrum Master');
INSERT INTO roles VALUES (3, 'Cloud Architect');
INSERT INTO roles VALUES (4, 'Sr. Developer');
INSERT INTO roles VALUES (5, 'Jr. Developer');

-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
-- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

-- ** I must add a status and type as the last addition in the reimbursement table...

-- for seeding the reimbursements table...
INSERT INTO reimbursements VALUES (1, 'Larry Cripsmith', 500, 06292019, 06302019, 'AWS Sol-Arch Ass. Cert.', 5, 3, 3);
INSERT INTO reimbursements VALUES (2, 'Terija Tsu', 300, 06192019, 06302019, 'AWS Security Cert.', 3, 3, 3);
INSERT INTO reimbursements VALUES (3, 'Terija Tsu', 250, 05262019, 06302019, 'AWS Sol-Arch Pro. Cert.', 4, 1, 2);
INSERT INTO reimbursements VALUES (4, 'Larry', 399, 05292019, 06142019, 'AWS Dev-Ops Cert.', 5, 2, 1);
INSERT INTO reimbursements VALUES (5, 'Larry', 350, 05292019, 06142019, 'AWS Adv. Networking Cert.', 3, 2, 2);
INSERT INTO reimbursements VALUES (6, 'Terija Tsu', 399, 04202019, 04302019, 'AWS Sol-Arch Pro. Cert.', 4, 2, 2);
INSERT INTO reimbursements VALUES (7, 'Larry', 150, 03292019, 04052019, 'Travel', 4, 1, 2);
INSERT INTO reimbursements VALUES (8, 'Larry', 420, 02292019, 04052019, 'AWS Adv. Networking Cert.', 2, 1, 1);

-- for seeding the reimbursementStatuses table
INSERT INTO reimbursementStatuses VALUES (1, 'fufilled');
INSERT INTO reimbursementStatuses VALUES (2, 'in-transit');
INSERT INTO reimbursementStatuses VALUES (3, 'pending');

-- for seeding the reimbursementTypes table...
INSERT INTO reimbursementTypes VALUES (1, 'cash');
INSERT INTO reimbursementTypes VALUES (2, 'credit');
INSERT INTO reimbursementTypes VALUES (3, 'unfufilled');

