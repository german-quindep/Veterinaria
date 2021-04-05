const mysql = require("mysql");
const { promisify } = require("util");
var pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "veterinaria",
  port: 3306,
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
