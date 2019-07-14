// import db from '../classes/models/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import db from '../config/connection';
import QueryMaker from '../classes/helpers/QueryMaker';

module.exports = {
    

    // get all of the users
    getAll: async (req: Request, res: Response) => {
        jwt.verify(req.token, 'secretkey', (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                res.json({message: 'Ok son...', authData})
            }
        });
        try {                 
            const x = await db.query(QueryMaker.getAll('users'))
            return res.json(x.rows);
        } catch (err) {
            throw err;
        }
      },

    // // get a single user by id
    getOne: async (req: Request, res: Response) => {
        try {
            const id = await req.params.id;
            const x = await db.query(
                QueryMaker.getOne('users', '_id'), [id]);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } 
    },

    // // update a single user at any field
    update: async (req: Request, res: Response) => {
        try {
            // deconstruct req.body into 2 arrays
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            // -1 to account for id 
            const x = await db.query(
                QueryMaker.setOne('users', '_id', myKeys.length-1, myKeys),
                 myVals);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } 
    },

    // register a new user
    addOne: async (req: Request, res: Response) => {
        try {

        } catch (err) {
            throw err;
        } 
    },

}