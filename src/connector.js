const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password:  'Aakash@98',
  database: 'zomato',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// exporting connection pool
module.exports = pool;
