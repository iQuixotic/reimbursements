// import db from '../classes/models/User';
// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import db from '../config/connection';
import CHECK  from '../utils/checkers';
import User from '../classes/models/User';

module.exports = {
    
    // CREATE a new db entry for login event
    login: async (req: Request, res: Response) => {
        
        try {   
            await db.query(`select * from users where (username, password) = ($1, $2);`, [req.body.username, req.body.password])      
            console.log(req.body)
            const response = await db.query(`select role_id from users where (username, password) = ($1, $2);`, [req.body.username, req.body.password])
            // console.log('THIS IS THE ROLE ID PLEASE......', response.rows[0].role_id)
            // const x = await CHECK.setUID(response.rows[0].role_id);
            // console.log(x)
            const user = await new User(req.body) //  QueryMaker.insertOne('reimbursements', myKeys),
            
            jwt.sign({ 
                _id: req.body._id, username: req.body.username, 
                password: req.body.password, role_id: response.rows[0].role_id }, 
                'secretkey', {expiresIn: '12h'}, (err, token) => {
                    
                console.log(token)
               res.json({
                   token
                });
            });
             return user;
                //  myVals);
            //  return res.json({message: 'You did such a good! Reimbursement added !!'});
         } catch (err) { 
             throw err; 
         }
         
        // setUID(req.body._id);
        console.log('at least i will give you an error');

    },

}
