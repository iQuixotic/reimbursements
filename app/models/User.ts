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

    // static getAll() {
    //   const x = 'SELECT * FROM users';
    //   return x;
    // }

    // static getOne(id) {
    //   const x = `SELECT * FROM users WHERE userid = ${id}`;
    //   return x;
    // }

    // // instead of returning multiple times, i should be running for each on the controllers
    // static setOne(id) {
    //   console.log(id)
    //   // console.log('this is the data im getting', data)
    //   const queryString = `UPDATE users SET ? WHERE userid = ${id}`;
    //   // ${key} = '${data[key]}' WHERE userid = ${parseInt(data.userid)}`
    //       // console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx', queryString);
    //       return queryString;
    // }
    
}

export default User;