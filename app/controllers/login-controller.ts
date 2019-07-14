import db from '../classes/models/User';
// import jwt from 'jsonwebtoken';
const jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import connection from '../config/connection';

module.exports = {
    
    // CREATE a new db entry for login event
    login: async (req: Request, res: Response) => {
        const user = { 
            id: 1, 
            username: 'redy', 
            email: 'trimer@some.com'
        }

        jwt.sign({user}, 'secretkey', {expiresIn: '30s'}, (err, token) => {
            console.log(token)
           res.json({
               token
            });
        });
        console.log('at least i will give you an error');

    },

}