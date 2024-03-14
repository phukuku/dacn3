const mysql = require("mysql");

// Create MySQL connection pool
const dbConn = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: "localhost",
  user: "root",
  password: "", // Enter your MySQL password here
  database: "quangthinhbds",
});

// Test the connection
dbConn.getConnection(function (err, connection) {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log("Database Connected Successfully!!!");
  connection.release(); // Release the connection
});

// Handle connection errors
dbConn.on('error', function(err) {
  console.error('MySQL database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
    // Reconnect if connection is lost
    dbConn.getConnection(function (error, connection) {
      if (error) {
        console.error('Error reconnecting to MySQL database:', error);
      } else {
        console.log('Reconnected to MySQL database!');
        connection.release(); // Release the connection
      }
    });
  } else {
    throw err;
  }
});

module.exports = dbConn;
