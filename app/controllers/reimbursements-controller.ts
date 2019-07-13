// import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import db from '../config/connection';
import QueryMaker from '../classes/helpers/QueryMaker';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    addOne: async (req: Request, res: Response) => {
        try {            
           // deconstruct req.body into arrays like: [keys] [vals]
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            const x = await db.query(
                QueryMaker.insertOne('reimbursements', myKeys),
                myVals);
            return res.json({message: 'You did such a good! Reimbursement added !!'});
        } catch (err) { 
            throw err; 
        }
      },

    // update a single reimbursement
    update: async (req: Request, res: Response) => {
        try {
            // deconstruct req.body into 2 arrays
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            // -1 to account for id 
            const x = await db.query(
                QueryMaker.setOne('reimbursements', 'reimbursementid', myKeys.length-1, myKeys),
                 myVals);
            return res.json({message: 'I have done your bidding. Reimbursement Updated'});
        } catch (err) { 
            throw err; 
        } 
    },

    // get the author for a single reimbursement
    getStatus: async (req: Request, res: Response) => {
        try {

            const joinFieldsOnArr = ['reimbursements.reimbursementid',
                'reimbursements.author',  'reimbursements.status',
                'reimbursementstatuses.status' ]; 

            const x = await db.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'reimbursementstatuses', 'reimbursements.status', 
                'reimbursementstatuses.statusid', parseInt(req.params.statusId)));
            return res.json(x.rows);
        } catch (err) { 
            throw err; 
        } 
      
    },

    // get the status for a single reimbursement
    getAuthor: async (req: Request, res: Response) => {
        try {
            const joinFieldsOnArr = ['reimbursements.reimbursementid',
                'reimbursements.author',  'reimbursements.status',
                'reimbursementtypes.type']; 

            const x = await db.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'reimbursementtypes', 'reimbursements.status', 
                'reimbursementtypes.typeid', parseInt(req.params.userId)));

            return res.json(x.rows);
        } catch (err) { 
            throw err; 
        } 
     
    },

}