import db from '../models/Reimbursement';
import { Request, Response } from 'express';
import connection from '../config/connection';

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    add: async (req: Request, res: Response) => {
        // console.log('come in and get the add.');
        // try {            
        //     client.connect();
        //     const x = await client.query(db.reimbursement(data))
        //     console.log(x.rows); 
        //     return res.json(x.rows[0]);
        // } catch (err) {
        //     throw err;
        // } finally {
        //     console.log('i made it here')
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