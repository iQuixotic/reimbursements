// import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import connection from '../config/connection';
import QueryMaker from '../utils/helpers/QueryMaker';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    addOne: async (req: Request, res: Response) => {
        console.log('i am trying my best')
        // const client = connection();
        // try {            
        //     client.connect();

        //    // deconstruct req.body into 2 arrays
        //     const myKeys = [...Object.keys(req.body)];
        //     const myVals = [...Object.values(req.body)];

        //     console.log('keys: ', myKeys, 'vals: ', myVals)
        //     const x = await client.query(
        //         QueryMaker.insertOne('reimbursements', myKeys),
        //         myVals);
        //         console.log(x, 'x')
        //     return res.json(x.rows);
        // } catch (err) {
        //     throw err;
        // } finally {
        //     client.end();
        // }
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