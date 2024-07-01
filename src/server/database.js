import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'sureview',
    password: 'admin1234!'
})

export default pool.promise();
