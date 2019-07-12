class User {
    private userId: number; // primary key
    private username: string; // not null, unique
    private password: string; // not null
    private firstName: string; // not null
    private lastName: string; // not null
    private email: string; // not null
    private role: number; // not null

    constructor(userId, username, password, firstName,
                lastName, email, role) {
                  
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName =lastName;
        this.email = email;
        this.role = role;
    }
    
}

export default User;