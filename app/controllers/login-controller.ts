// imports and variables
import { Request, Response } from 'express';
import db from '../config/connection';
import User from '../classes/models/User';
import QueryMaker from '../classes/helpers';
const jwt = require('jsonwebtoken');
import bcrypt from 'bcrypt';
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

export default {
    
    // CREATE a new db entry for login event
    login: async (req: Request, res: Response) => {
        
        // boolean
        const validCredentials = await User.checkUser(req, req.body.username, req.body.password)
        
        if(validCredentials) {
            try {       
                // set response equal to the role_id (pre-striping) and create a new user
                const response = await db.query(QueryMaker.login('role_id'), [req.body.username, req.password] );
                const user = await new User(req.body) 
                                
                // sign token and pass secret
                jwt.sign({ 
                    _id: req.body._id, username: req.body.username, 
                    password: req.body.password, role_id: response.rows[0].role_id }, 
                    'secretkey', {expiresIn: '12h'}, (err, token) => {
                        
                   res.json({ token });
                });
    
                return user;
             } catch (err) { 
                 throw err; 
             }
        } else res.json({message: 'Invalid Credentials'});
        
    },

}
