// const db = require('someConnection');

class Role {
    private roleId: number; // primary key
    private role: string; // not null, unique

    constructor(roleId, role) {
        this.roleId = roleId,
        this.role = role
    }
  public getRole(id){
    const roleData = {
        roleId: this.roleId,
        role: this.role
    }
    return roleData;
  }

  public setRole(role){
    this.roleId = role.roleId;
    this.role = role.role;

    // db.somethingConnection(dbName, password, data)
  }
    
}

module.exports = {Role};