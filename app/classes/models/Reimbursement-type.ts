
class ReimbursementType {
    private typeId: number; // primary key
    private type: string; // not null, unique

    constructor(typeId, type) {
       this.typeId = typeId;
       this.type = type;
    }
    
  public getReimbursement(id) {
    const reimbursementData = {
        typeId: this.typeId,
        type: this.type
    }
    return reimbursementData;
  }

  public setReimbursement(x){
    this.typeId = x.typeId;
    this.type = x.type;    

    // db.somethingConnection(dbName, password, data)
  }
    
}

module.exports = {ReimbursementType};