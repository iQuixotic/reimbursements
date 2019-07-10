import db from '../models/User';
import { Request, Response } from 'express';
import connection from '../config/connection';

module.exports = {
    
    // CREATE a new db entry for login event
    login: async (req: Request, res: Response) => {
        console.log('come in to login.');
    },

}