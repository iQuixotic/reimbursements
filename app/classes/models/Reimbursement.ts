// const db = require('someConnection');
class Reimbursement {
    private reimbursementId: number; // primary key
    private author: number;  // foreign key -> User, not null
    private amount: number;  // not null
    private dateSubmitted: number; // not null
    private dateResolved: number;
    private description: string; // not null
    private resolver: number; // foreign key -> User
    private status: number; // foreign ey -> ReimbursementStatus, not null
    private type: number; // foreign key -> ReimbursementType

    // constructor(reimbursementId, author, amount,
    //             dateSubmitted, dateResolved, description,
    //             resolver, status, type) {
    //     this.reimbursementId = reimbursementId;
    //     this.author = author;
    //     this.amount = amount;
    //     this.dateSubmitted = dateSubmitted;
    //     this.dateResolved = dateResolved;
    //     this.description = description;
    //     this.resolver = resolver;
    //     this.status = status;
    //     this.type = type;
    // }
  public getReimbursement(id) {
    const reimbursementData = {
        reimbursementId: this.reimbursementId,
        author: this.author,
        amount: this.amount,
        dateSubmitted: this.dateSubmitted,
        dateResolved: this.dateResolved,
        description: this.description,
        resolver: this.resolver,
        status: this.status, 
        type: this.type
    }
    return reimbursementData;
  }

  public setReimbursement(x){
    this.reimbursementId = x.reimbursementId;
    this.author = x.author;
    this.amount = x.amount;
    this.dateSubmitted = x.dateSubmitted;
    this.dateResolved = x.dateResolved;
    this.description = x.description;
    this.resolver = x.resolver;
    this.status = x.status;
    this.type = x.type;
  }

  static set reimbursement(data) {

  }
    
}

export default Reimbursement;