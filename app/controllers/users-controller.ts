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
            // const mykeys = await keysFromObjs(req.body);
            // console.log('mykeys are here', mykeys, 'my req.body here', req.body)
            const x = await client.query(db.setOne(req.body.userid), req.body);
            // return res.json({message: 'You did a good', rowsInserted: x});
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    }

}