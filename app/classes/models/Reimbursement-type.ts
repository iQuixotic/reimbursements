
class ReimbursementType {
    private _id: number; // primary key
    private type: string; // not null, unique

    constructor(typeId, type) {
       this._id = typeId;
       this.type = type;
    }
    
}

module.exports = {ReimbursementType};