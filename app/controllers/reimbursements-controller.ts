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
        console.log('come in and get the update.');
    },

    // get the author for a single reimbursement
    getAuthor: async (req: Request, res: Response) => {
        console.log('come in and get the author.');
    },

    // get the status for a single reimbursement
    getStatus: async (req: Request, res: Response) => {
        console.log('come in and get the status.');
    },

}