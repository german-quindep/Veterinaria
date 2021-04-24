const CrudDaoBD = {};

const pool = require("../database");
//global Variable
var SQL = "";
//INSERTAR
CrudDaoBD.insertBd = async (table, set) => {
  SQL = `INSERT INTO ${table} SET ${set};`;
  //ASIGNO A DATA LO QUE ME ENVIE EL CALLBACK POOL
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result; //SI HAY EXITO ENVIO EL DATO
    })
    .catch((err) => {
      console.error(err); //SI HAY ERROR QUEDA LA APP
    });
  return data;
};
//CONSULTAR UN ID
CrudDaoBD.consultById = async (table, where) => {
  SQL = `SELECT * FROM ${table} WHERE ${where};`;
  //ASIGNO A DATA LO QUE ME ENVIE EL CALLBACK POOL
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result; //SI HAY EXITO ENVIO EL DATO
    })
    .catch((err) => {
      console.error(err); //SI HAY ERROR QUEDA LA APP
    });
  return data;
};
//consultar todos los id
CrudDaoBD.allRegister = async (table) => {
  SQL = `SELECT * FROM ${table}`;
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};

//ACTUALIZAR
CrudDaoBD.updateRegister = async (table, set, where) => {
  SQL = `UPDATE ${table} SET ${set} WHERE ${where};`;
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};
//ELIMINAR
CrudDaoBD.deleteRegister = async (table, where) => {
  SQL = `DELETE FROM ${table} WHERE ${where};`;
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};
//CONSULT CON JOIN
CrudDaoBD.getJoinConsult = async (table, join, where) => {
  //as user JOIN roles as rol ON user.IdRoles=rol.IdRol WHERE user.username="german"
  SQL = `SELECT * FROM ${table} ${join} WHERE ${where};`;
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.error(err);
    });
  return data;
};
//CONSULT JOIN RESTRICCIONES
CrudDaoBD.getJoinRestriccion = async (table, join, where) => {
  SQL = `SELECT ${table} JOIN ${join} WHERE ${where}`;
  const data = await pool
    .query(SQL)
    .then((result) => {
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  return data;
};
module.exports = CrudDaoBD;
