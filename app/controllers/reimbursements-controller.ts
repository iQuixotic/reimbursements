// const db = require('../models/queries');
// import {Client} from 'pg';
// import { connection }  from '../config/connection';
var {Client} = require('pg');
var connection = require('../config/connection');

module.exports = {
    
    // CREATE a new db entry for a single reimbursement
    add: (req, res) => {
        console.log('come in and get the add.');
    //   connection.query(db.create(req.body.action), (error, results, fields) => {
    //     if (error) throw error;
    //     res.send({ obj: results })
    //   })

    },
    // update a single reimbursement
    update: (req, res) => {
        console.log('come in and get the update.');

    },
    // get the author for a single reimbursement
    getAuthor: (req, res) => {
        console.log('come in and get the author.');

    },
    // get the status for a single reimbursement
    getStatus: (req, res) => {
        console.log('come in and get the status.');

    },

}