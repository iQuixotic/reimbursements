// imports
import { ReimbursementStatus, ReimbursementType } from '../models';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Reimbursement {
    private _id: number; // primary key
    private author: number;  // foreign key -> User, not null
    private amount: number;  // not null
    private date_submitted: number; // not null
    private date_resolved: number;
    private description: string; // not null
    private resolver: number; // foreign key -> User
    private status: ReimbursementStatus; // foreign ey -> ReimbursementStatus, not null
    private type: ReimbursementType; // foreign key -> ReimbursementType

    constructor(obj) {
        if(!obj) {
            return;   
        }    
        this._id = obj.reimbursementId;
        this.author = obj.author;
        this.amount = obj.amount;
        this.date_submitted = obj.dateSubmitted;
        this.date_resolved = obj.dateResolved;
        this.description = obj.description;
        this.resolver = obj.resolver;
        this.status = obj.status;
        this.type = obj.type;
    }    
}

export default Reimbursement;