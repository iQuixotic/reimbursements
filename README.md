# Credits
 *- a simple backend-only reimbursement app*

### How it Works
Database can be queried with Postman. It is neccessary to be logged-in in order to acess all routes except the register route. Once you login, you will recieve a JSON web token as a response. Place that in the *Authorization* header like so:

    Authorization | Bearer <token>

From there, the following routes are allowed: 

**Routes** | **Purpose**
--- | ---
**POST /register** | *Register a new user*
**POST /login** | *Login as a user with 1 of 3 privilege levels*
**GET /users** | *returns a list of all users*
**GET /users/:id** | *return a single user*
**PATCH /users** | *change a user based on the payload provided in the body*
**GET /reimbursements/status/:id** | *return reimbursement of a certain status type*
**GET /reimbursements/author/:id** | *return all reimbursements by a certain author*
**POST /reimbursements** | *create a new reimbursement*
**PATCH /reimbursements** | *edit a single reimbursement along any field (send id in payload)*

-Also note, SQL table starter code provided.

### Purpose 
 ```
 This app was made with the purpose of working with multiple tables in a relational 
 database. Postman was used to test the routes. This back-end project features a login 
 (using JSON web tokens) and encrypted user passwords. 
 ```

### Techs Used
**Techs** | **Uses**
--- | --- 
**Typescript** |  *Type validation*
**jsonwebtoken** | *Used to authenticate -- hold authData to be passed around to check privileges*
**Bcrypt** |  *Used to encrypt passwords and compare hased paswords*
**Postgresql** |  *Relational Database*

### Acknowledgements
1. There are some variables and functions that were not type checked. This is something that I would like to implement more of in the future.
2. The database could be more restrictive. Constraints were left more open-ended for now as I would like to have a better vision of how the UI would be before I add in more constaints.
3. There will probably be a final code cleanup at some point in the future to make a few functions more generic, check for redundant exporting, code indention, etc. For now, all the routes work and that is good!

## THANKS FOR VISITING !!!

- *iQuixotic*
