import db from '../classes/models/User';
import { Request, Response } from 'express';
import connection from '../config/connection';
import QueryMaker from '../classes/mixins/QueryMaker';

module.exports = {

    // get all of the users
    getAll: async (req: Request, res: Response) => {
        const client = connection();   
        try {                 
            client.connect();
            const x = await client.query(QueryMaker.getAll('users'))
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
                QueryMaker.getOne('users', 'userid'), [id]);
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

            // deconstruct req.body into 2 arrays
            const myKeys = [...Object.keys(req.body)];
            const myVals = [...Object.values(req.body)];

            // -1 to account for id 
            const x = await client.query(
                QueryMaker.setOne('users', 'userid', myKeys.length-1, myKeys),
                 myVals);
            return res.json(x.rows[0]);
        } catch (err) {
            throw err;
        } finally {
            client.end();
        }
    }

}