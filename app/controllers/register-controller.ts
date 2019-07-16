// imports and variables
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import db from '../config/connection';
import User from '../classes/models/User';
import QueryMaker from '../classes/helpers';
const jwt = require('jsonwebtoken');
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {

    // register a new user
    addOne: async (req: Request, res: Response) => {
            
        try {
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    let obj = {
                        username: req.body.username, 
                        password: hash,                       
                        first_name: req.body.first_name, 
                        last_name: req.body.last_name, 
                        email: req.body.email, 
                        role_id: req.body.role_id
                    }
                    const user = new User(obj);
                    console.log('this is a user', user)

                    // deconstruct user into arrays like: [keys] [vals]
                    const myKeys = [...Object.keys(user)];
                    const myVals = [...Object.values(user)];
                    db.query.QueryMaker.insertOne('users', myKeys), myVals;
                }
            }), 
            await res.status(201).json({
                message: `New user ${req.body.username} created !!`
            });
        } catch (err) {
            throw err;
        } 
    }
}