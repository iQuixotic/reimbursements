// import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import connection from '../config/connection';
import QueryMaker from '../utils/helpers/QueryMaker';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    addOne: async (req: Request, res: Response) => {
        const client = connection();
        try {            
            client.connect();

           // deconstruct req.body into arrays like: [keys] [vals]
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            const x = await client.query(
                QueryMaker.insertOne('reimbursements', myKeys),
                myVals);
            return res.json({message: 'You did such a good! Reimbursement added !!'});
        } catch (err) { throw err; }
             finally {
            client.end();
        }
      },

    // update a single reimbursement
    update: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();

            // deconstruct req.body into 2 arrays
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            // -1 to account for id 
            const x = await client.query(
                QueryMaker.setOne('reimbursements', 'reimbursementid', myKeys.length-1, myKeys),
                 myVals);
            return res.json({message: 'I have done your bidding. Reimbursement Updated'});
        } catch (err) { throw err; } 
        finally {
            client.end();
        }
    },

    // get the author for a single reimbursement
    getStatus: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();

            const joinFieldsOnArr = ['reimbursements.reimbursementid',
                'reimbursements.author',  'reimbursements.status',
                'reimbursementstatuses.status' ]; 

            const x = await client.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'reimbursementstatuses', 'reimbursements.status', 
                'reimbursementstatuses.statusid', parseInt(req.params.statusId)));

                console.log(x.rows);
            return res.json(x.rows);
        } catch (err) { throw err; } 
        finally {
            client.end();
        }
    },

    // get the status for a single reimbursement
    getAuthor: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();
            console.log(parseInt(req.params.userId))

            const joinFieldsOnArr = ['reimbursements.reimbursementid',
                'reimbursements.author',  'reimbursements.status',
                'reimbursementtypes.type']; 

            const x = await client.query(
                QueryMaker.getJoinedTbl('reimbursements', joinFieldsOnArr, 
                'reimbursementtypes', 'reimbursements.status', 
                'reimbursementtypes.typeid', parseInt(req.params.userId)));

                console.log(x.rows);
            return res.json(x.rows);
        } catch (err) { throw err; } 
        finally {
            client.end();
        }
    },

}