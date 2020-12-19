const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'yangxx123',
    database: 'instaclonedb'
});

connection.connect();

let query = 'SELECT * from userINFO';
connection.query(query,(error, rows, fields) => {
    if( error) console.log(error);
        console.log('User info is: ',rows[0].email);
});

console.log('asd');
connection.end();