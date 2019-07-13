// const db = require('someConnection');

class ReimbursementStatus {
    private statusId: number; // primary key
    private status: string; // not null, unique

    constructor(statusId, status) {
       this.statusId = statusId;
       this.status = status;
    }
  public getReimbursement(id) {
    const reimbursementData = {
        statusId: this.statusId,
        status: this.status
    }
    return reimbursementData;
  }

  public setReimbursement(x){
    this.statusId = x.statusId;
    this.status = x.status;    
  }
    
}

module.exports = {ReimbursementStatus};