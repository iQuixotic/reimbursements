// imports
import { ReimbursementStatus, ReimbursementType } from '../../classes';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
class Reimbursement {
    // private _id: number | null | undefined; // primary key
    private author: number;  // foreign key -> User, not null
    private amount: number;  // not null
    private date_submitted: string; // not null
    private date_resolved: string | null;
    private description: string; // not null
    private resolver: number | null; // foreign key -> User
    private status: ReimbursementStatus; // foreign ey -> ReimbursementStatus, not null
    private type: ReimbursementType; // foreign key -> ReimbursementType

    constructor(obj) {
        if(!obj) {
            return;   
        }    
        // this._id = obj._id;
        this.author = obj.author;
        this.amount = obj.amount;
        this.date_submitted = obj.date_submitted;
        this.date_resolved = obj.date_resolved;
        this.description = obj.description;
        this.resolver = obj.resolver;
        this.status = obj.status;
        this.type = obj.type;
    }    
}

export default Reimbursement;