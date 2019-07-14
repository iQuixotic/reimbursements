import Role from '../models/Role';
class User {
    private _id: number; // primary key
    private username: string; // not null, unique
    private password: string; // not null
    private first_name: string; // not null
    private last_name: string; // not null
    private email: string; // not null
    private role_id: Role; // not null

    constructor(obj) {      
        if(!obj) {
            return;   
        }          
        this._id = obj._id;
        this.username = obj.username;
        this.password = obj.password;
        this.first_name = obj.first_name;
        this.last_name = obj.last_name;
        this.email = obj.email;
        this.role_id = obj.role_id;
    }
    
}

export default User;