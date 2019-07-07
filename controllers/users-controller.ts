// const db = require('../models/queries');
var {Client} = require('pg');
var connection = require('../config/connection');
// import client from '../config/connection';

module.exports = {
    
    // get all of the users
    getAll: (req, res) => {
        console.log('come in and get all.');
    },
    // get a single user by id
    getOne: (req, res) => {
        console.log('come in and get one from users.');
    },
    // update a single user
    update: (req, res) => {
        console.log('come in and update the users.');

    }

}