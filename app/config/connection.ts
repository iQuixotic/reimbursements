import { Pool } from 'pg';
import SECRET from './secret';

const connection = () => {
    return new Pool ({
        user: SECRET.DB_USER,
        password:SECRET.DB_PASSWORD,
        host: SECRET.DB_HOST,
        port: SECRET.DB_PORT,
        database: SECRET.DB_DATABASE
    });
}

export default connection;