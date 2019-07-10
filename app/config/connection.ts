import {Pool} from 'pg';
var SECRET = require('./secret');

const client = new Pool({
    user: SECRET.DB_USER,
    password:SECRET.DB_PASSWORD,
    host: SECRET.DB_HOST,
    port: SECRET.DB_PORT,
    database: SECRET.DB_DATABASE
});

export default client;