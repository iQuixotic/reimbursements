import Role from '../models/Role';
class User {
    private _id: number; // primary key
    private username: string; // not null, unique
    private password: string; // not null
    private first_name: string; // not null
    private last_name: string; // not null
    private email: string; // not null
    private role_id: Role; // not null

    constructor(userId, username, password, firstName,
                lastName, email, role) {
                  
        this._id = userId;
        this.username = username;
        this.password = password;
        this.first_name = firstName;
        this.last_name =lastName;
        this.email = email;
        this.role_id = role;
    }
    
}

export default User;