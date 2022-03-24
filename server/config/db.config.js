const mysql = require("mysql");

// create db connection
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

dbConn.connect((error) => {
  if (error) throw error;
  console.log("Database connection created successfully!");
});

module.exports = dbConn;
