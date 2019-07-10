import db from '../models/User';
import { Request, Response } from 'express';
import client from '../config/connection';

module.exports = {
    // get all of the users
    getAll: async (req: Request, res: Response) => {
        try {            
            client.connect();
            const x = await client.query(db.users)
            console.log(x.rows); 
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            console.log('i made it here')
            client.end();
        }
      },
      
    // get a single user by id
    getOne: async (req: Request, res: Response) => {
        try {
            client.connect();
            const id = await req.params.id;
            const x = await client.query(db.getOne(id));
            console.log(x.rows);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    },

    // update a single user
    update: async (req: Request, res: Response) => {
        try {
            client.connect();
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }

    }

}