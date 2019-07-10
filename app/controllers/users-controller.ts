import db from '../models/User';
import { Request, Response } from 'express';
import connection from '../config/connection';
import keysFromObjs from '../utils/utility';

module.exports = {

    // get all of the users
    getAll: async (req: Request, res: Response) => {
        const client = connection();   
        try {                 
            client.connect();
            const x = await client.query(db.getAll())
            // console.log(x.rows); 
            return res.json(x.rows);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
      },

    // get a single user by id
    getOne: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();
            const id = await req.params.id;
            const x = await client.query(db.getOne(id));
            // console.log(x.rows);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    },

    // update a single user at any field
    update: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();
            const data = await req.body;
            const remem = keysFromObjs(req.body);
            console.log(remem)
                // const my = req.body[keys]
                // console.log(my)
            // const x = await client.query(db.setOne(data));
            // console.log('data', data, 'x', x);
            // return res.json({message: 'You did a good', rowsInserted: x.rows[0]});
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    }

}