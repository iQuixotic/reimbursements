import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import connection from '../config/connection';
import QueryMaker from '../utils/helpers/QueryMaker';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    addOne: async (req: Request, res: Response) => {
        const client = connection();
        try {            
            client.connect();
            const x = await client.query(QueryMaker.getOne())
            return res.json(x.rows);
        } catch (err) {
            throw err;
        } finally {
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