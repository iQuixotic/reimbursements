// imports
import { Request, Response } from 'express';
import db from '../config/connection';
import QueryMaker from '../classes/helpers';
import { Reimbursement } from '../classes/models';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {
    
    // CREATE a new db entry for a single reimbursement 
    // ---------------ANYONE ALLOWED-------------------
    addOne: async (req: Request, res: Response) => {
        try {            
            const reim = new Reimbursement(req.body);
            const myKeys = [...Object.keys(reim)];
            const myVals = [...Object.values(reim)];

            await db.query(
                QueryMaker.insertOne('reimbursements', myKeys),
                myVals);

            res.json({message: 'New reimbursement added'});
        } catch (err) { 
            throw err; 
        }
    },

    // UPDATE a single reimbursement
    update: async (req: Request, res: Response) => {

        // FINANCE MANAGERS may update
        if(req.authData['role_id'] === 1) {
        try {
            // get a reimbursement and construct patched together obj as user
            const x = await db.query(
                QueryMaker.getOne('reimbursements', '_id'), [req.body._id]);
            const r = req.body.date_resolved ? {resolver: req.authData.role_id} : null;
            const reim = await new Reimbursement({...x.rows[0], ...req.body, ...r});
            
            const myKeys = [...Object.keys(reim)];
            const myVals = [...Object.values(reim)];

            // -1 to account for id not present
            await db.query(
                QueryMaker.setOne('reimbursements', '_id', myKeys.length-1, myKeys),
                 myVals);

            return res.json({message: 'I have done your bidding. Reimbursement Updated'});
        } catch (err) { 
            throw err; 
        }
    } else {
        res.json({message: "There's nothing here for you."})
    }
    
    },

    // get by status
    getStatus: async (req: Request, res: Response) => {

        // FINANCE MANAGERS and CURRENT USERS may get status
        if(req.authData.role_id === 1 || req.params.id == req.selfReference) {

            try {
                // gets passed to the query
                const joinFieldsOnArr = ['reimbursements._id',
                    'reimbursements.author',  'reimbursements.status',
                    'reimbursement_statuses.status' ]; 

                // query JOIN reimbursements.author to author._id
                const x = await db.query(
                    QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                    'reimbursement_statuses', 'reimbursements.status', 
                    'reimbursement_statuses._id'), [parseInt(req.params.id)]);
                    
                return res.json(x.rows);
            } catch (err) { 
                throw err; 
            } 
        } else {
            res.json({message: "Quit it..."})
        }
    },

    // get by author
    getAuthor: async (req: Request, res: Response) => {

        // FINANCE MANAGERS and CURRENT USERS may view author
        if(req.authData.role_id === 1 || req.params.id == req.selfReference){
        try {
            // passed to JOIN query
            const joinFieldsOnArr = ['reimbursements._id',
                'reimbursements.author',  'reimbursements.status',
                'users.first_name', 'users.last_name']; 

            // query JOIN reimbursements.status -> status._id
            const x = await db.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'users', 'reimbursements.author', 
                'users._id'), [req.params.id]);

            return res.json(x.rows);
            } catch (err) { 
                throw err; 
            } 
        } else {
            res.json({message: "Only Financials and ticket holders bla bla bla"})
        }

        
     
    }

}