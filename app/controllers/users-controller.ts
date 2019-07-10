// var db = require('../models/User');
import db from '../models/User';
import { Request, Response } from 'express';
import connection from '../config/connection';

module.exports = {
    
    // get all of the users
    getAll: async (req: Request, res: Response) => {
        try {
            connection.connect();
            const x = await connection.query(db.users)
            console.log(x.rows); 
        } catch (err) {
            throw err;
        } finally {
            connection.end();
        }

      },
    // get a single user by id
    getOne: async (req: Request, res: Response) => {
        try {
            connection.connect();
        } catch (err) {
            throw err;
        } finally {
            connection.end();
        }
        
        console.log('come in and get one from users.');
    },
    // update a single user
    update: async (req: Request, res: Response) => {
        try {
            connection.connect();
        } catch (err) {
            throw err;
        } finally {
            connection.end();
        }
        
        console.log('come in and update the users.');

    }

}