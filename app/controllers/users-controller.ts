import db from '../models/User';
import { Request, Response } from 'express';
import connection from '../config/connection';
import keysFromObjs from '../utils/utility';
import Query from '../utils/helpers/Query';

module.exports = {

    // get all of the users
    getAll: async (req: Request, res: Response) => {
        const client = connection();   
        try {                 
            client.connect();
            // console.log(Query.getAll('users'))
            const x = await client.query(Query.getAll('users'))
            return res.json(x.rows);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
      },

    // // get a single user by id
    getOne: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();
            const id = await req.params.id;
            const x = await client.query(
                Query.getOne('users', 'userid'), [id]);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    },

    // // update a single user at any field
    update: async (req: Request, res: Response) => {
        const client = connection();   
        try {
            client.connect();
            // console.log('this is the request body', req.body);
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];
            // await keysFromObjs(req.body);
            console.log(myKeys)
            console.log(myVals)
            // myKeys.length -1 is to not count the id toward what will be incremented
            console.log('this is the vals VALSSSSS', [...Object.values(req.body)])
            const x = await client.query(
                Query.setOne('users', 'userid', myKeys.length-1, myKeys), myVals);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    }

}