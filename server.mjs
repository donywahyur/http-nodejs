import { createServer } from 'http';

createServer((req, res) => {
  const mysql = require('mysql');
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database name'
  });
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

  res.write(`Hallo! ${process.env.PORT}`);
  res.end();
}).listen(process.env.PORT);
