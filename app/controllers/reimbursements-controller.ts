// import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import db from '../config/connection';
import QueryMaker from '../classes/helpers/QueryMaker';
import CHECK from '../utils/checkers';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    addOne: async (req: Request, res: Response) => {
        try {            
           // deconstruct req.body into arrays like: [keys] [vals]
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            await db.query(
                QueryMaker.insertOne('reimbursements', myKeys),
                myVals);
            return res.json({message: 'You did such a good! Reimbursement added !!'});
        } catch (err) { 
            throw err; 
        }
      },

    // update a single reimbursement
    update: async (req: Request, res: Response) => {
        if(CHECK.isFinancialManager()) {
        try {
            // deconstruct req.body into 2 arrays like: [keys] [vals]
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            // -1 to account for id not present
            const x = await db.query(
                QueryMaker.setOne('reimbursements', '_id', myKeys.length-1, myKeys),
                 myVals);
            return res.json({message: 'I have done your bidding. Reimbursement Updated'});
        } catch (err) { 
            throw err; 
        } 
    }
    },

    // get by status
    getStatus: async (req: Request, res: Response) => {
        if(CHECK.isFinancialManager()) {

            try {

                const joinFieldsOnArr = ['reimbursements._id',
                    'reimbursements.author',  'reimbursements.status',
                    'reimbursement_statuses.status' ]; 

                const x = await db.query(
                    QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                    'reimbursement_statuses', 'reimbursements.status', 
                    'reimbursement_statuses._id', parseInt(req.params.id)));
                return res.json(x.rows);
            } catch (err) { 
                throw err; 
            } 
    }
      
    },

    // get by author
    getAuthor: async (req: Request, res: Response) => {
        if(CHECK.isFinancialManager()) {
        try {
            const joinFieldsOnArr = ['reimbursements._id',
                'reimbursements.author',  'reimbursements.status',
                'reimbursement_types.type']; 

            const x = await db.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'reimbursement_types', 'reimbursements.status', 
                'reimbursement_types._id', parseInt(req.params.id)));

            return res.json(x.rows);
        } catch (err) { 
            throw err; 
        } 
    }
     
    },

}