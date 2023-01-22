// get the client
const mysql = require('mysql2/promise');

// Create the connection pool. The pool-specific settings are the defaults
// connect to database users
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'users',
//    password:  
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
});

export default pool