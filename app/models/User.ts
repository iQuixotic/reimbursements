// const db = require('someConnection');
// const Role = require('./Roles')

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

    static get users() {
      const x = 'SELECT * FROM users';
      return x;
    }

  // public getUser(id){
  //   const userData = {
  //       userId: this.userId,
  //       username : this.username,
  //       password : this.password,
  //       firstName : this.firstName,
  //       lastName: this.lastName,
  //       email : this.email,
  //       role: this.role
  //   }
  //   return userData;
  // }

  // public setUser(user){
  //   this.userId = user.userId;
  //   this.username = user.username;
  //   this.password = user.password;
  //   this.firstName = user.firstName;
  //   this.lastName = user.lastName;
  //   this.email = user.email;
    // this.role = user.role;

    // db.somethingConnection(dbName, password, data)
  // }
    
}

export default User;