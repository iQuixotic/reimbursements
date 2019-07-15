// import db from '../classes/models/User';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import db from '../config/connection';
import QueryMaker from '../classes/helpers/QueryMaker';
import User from '../classes/models/User';
import bcrypt from 'bcrypt';
import CHECK from '../utils/checkers';

module.exports = {

    // get all of the users
    getAll: async (req: Request, res: Response) => {
        jwt.verify(req.token, 'secretkey', async (err, authData) => {
            if(err) {
                res.sendStatus(403);
            } else {
                console.log(authData)
                
            if(authData.role_id === 1) {
                try {                 
                    const userArr = [];
                    const x = await db.query(QueryMaker.getAll('users'))
                    x.rows.forEach(el => {
                        const user = new User(el);  
                        userArr.push(user)              
                    });
                    return res.json(x.rows);
                } catch (err) {
                    throw err;
                }
            } else{
                res.json({message: 'Only Finance managers may view all users'});
            }
            }
        });
        
      },

    // // get a single user by id
    getOne: async (req: Request, res: Response) => {
        if(CHECK.isFinancialManager() || CHECK.isSelfReferencial()) {
                try {
                    const id = await req.params.id;
                    const x = await db.query(
                        QueryMaker.getOne('users', '_id'), [id]);
                    const user = await new User(x.rows[0]);
                    console.log('this is the user for getOne', user);
                    return res.json(user);
                } catch (err) {
                    throw err;
                } 
            } else {
                res.json({message: 'Only Finance managers or ticket holders may view users in this way.'});
            }
    },

    // update a single user at any field
    update: async (req: Request, res: Response) => {
        if(CHECK.isAdmin()) {
            try {
                // deconstruct req.body into 2 arrays
                const myKeys = [...Object.keys(req.body)];
                const myVals = [...Object.values(req.body)];
    
                // -1 to account for id 
                const x = await db.query(
                    QueryMaker.setOne('users', '_id', myKeys.length-1, myKeys),
                     myVals);
                const user = await new User(x.rows[0]);
                console.log('this is what a     USER    SMELLS  LIKE: ', user )
                return res.json(user);
            } catch (err) {
                throw err;
            } 
        } else {
            res.json({message: "Only admins may update a user."})
        }
       
    },

    // register a new user
    addOne: async (req: Request, res: Response) => {
        try {
            console.log(req.body)

            bcrypt.hash(req.body.password, 10, (err, hash) => {
                if(err) {
                    return res.status(500).json({
                        error: err
                    });
                } else {
                    // const user = new User(
                    //     req.body.username, hash,                       
                    //     req.body.first_name, req.body.last_name, 
                    //     req.body.email, req.body.role_id
                    // );
                    // user.save();
                }
            }), 
            await console.log(res.json())
            await res.status(201).json({
               message: `New user ${req.body.username} created.`
            })
        
        } catch (err) {
            throw err;
        } 
    },

}