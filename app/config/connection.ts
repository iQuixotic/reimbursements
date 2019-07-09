import {Client} from 'pg';
var SECRET = require('./secret');

const client = new Client({
    user: SECRET.DB_USER,
    password:SECRET.DB_PASSWORD,
    host: SECRET.DB_HOST,
    port: SECRET.DB_PORT,
    database: SECRET.DB_DATABASE
});

module.exports = client;
