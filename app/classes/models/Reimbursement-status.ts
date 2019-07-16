class ReimbursementStatus {
    private _id: number; // primary key
    private status: string; // not null, unique

    constructor(statusId, status) {
       this._id = statusId;
       this.status = status;
    }  
}

export default ReimbursementStatus;