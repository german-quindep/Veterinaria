const CrudDaoBD = {};

const pool = require("../database");
//global Variable
var SQL = "";
//INSERTAR
CrudDaoBD.insertBd = async (table, set) => {
  SQL = `INSERT INTO ${table} SET ${set};`;
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
//CONSULTAR UN ID
CrudDaoBD.consultById = async (table, where) => {
  SQL = `SELECT * FROM ${table} WHERE ${where};`;
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
  SQL = `DElETE FROM ${table} WHERE ${where};`;
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

module.exports = CrudDaoBD;
