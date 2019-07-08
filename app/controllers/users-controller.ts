var db = require('../models/User');
var {Client} = require('pg');
var connection = require('../config/connection');
// import client from '../config/connection';


// client.query('SELECT NOW() as now', (err, res) => {
//     if (err) {
//       console.log(err.stack)
//     } else {
//       console.log(res.rows[0])
//     }
//   })
  
//   // promise
//   client.query('SELECT NOW() as now')
//     .then(res => console.log(res.rows[0]))
//     .catch(e => console.error(e.stack))


module.exports = {
    
    // get all of the users
    getAll: (req, res) => {
        console.log('come in and get all.');
        //    connection.connect()
        //     .then(() => connection.query(db.getUsers())
        //     .then(res => console.log(res))
        //     .catch(e => console.log(e))
        //     .finally(() => connection.end()));
        // connection.query(db.getUsers()), (error, res, fields) => {
        // if (error) throw error;
        // console.log(res)
        // res.send({ obj: res })
      },
    //   .then(res => console.log(res))
    // get a single user by id
    getOne: (req, res) => {
        console.log('come in and get one from users.');
    },
    // update a single user
    update: (req, res) => {
        console.log('come in and update the users.');

    }

}