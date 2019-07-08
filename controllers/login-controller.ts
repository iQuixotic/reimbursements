// const db = require('../models/queries');
// const connection = require('../config/connection');
var {Client} = require('pg');
var connection = require('../config/connection.ts');
// import client from '../config/connection';

module.exports = {
    
    // CREATE a new db entry for login event
    login: (req, res) => {
        console.log('come in to login.');
        // connection.connect()
        //     .then(() => console.log('connected successfully'))
        //     .catch(e => console.log(e))
        //     .finally(() => connection.end());
    },

}