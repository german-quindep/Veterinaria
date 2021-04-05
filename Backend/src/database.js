const mysql = require("mysql");
const config = require("./config.js");
const { promisify } = require("util");
var pool = mysql.createPool({
  host: config.HOST_BD,
  user: config.User_BD,
  password: config.Password_BD,
  database: config.Database,
  port: config.Port_BD,
});
pool.getConnection(function (error, connection) {
  if (error) {
    throw error;
  } else {
    connection.release();
    console.log("Conexion correcta...");
  }
  return;
});
//PROMISIFY Pool QUERY
pool.query = promisify(pool.query);
module.exports = pool;
