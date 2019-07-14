import ReimbursementType from '../models/Reimbursement-type';
import ReimbursementStatus from '../models/Reimbursement-status';
class Reimbursement {
    private reimbursement_id: number; // primary key
    private author: number;  // foreign key -> User, not null
    private amount: number;  // not null
    private date_submitted: number; // not null
    private date_resolved: number;
    private description: string; // not null
    private resolver: number; // foreign key -> User
    private status_id: ReimbursementStatus; // foreign ey -> ReimbursementStatus, not null
    private type_id: ReimbursementType; // foreign key -> ReimbursementType

    constructor(reimbursementId, author, amount,
                dateSubmitted, dateResolved, description,
                resolver, status, type) {
        this.reimbursement_id = reimbursementId;
        this.author = author;
        this.amount = amount;
        this.date_submitted = dateSubmitted;
        this.date_resolved = dateResolved;
        this.description = description;
        this.resolver = resolver;
        this.status_id = status;
        this.type_id = type;
    }    
}

export default Reimbursement;