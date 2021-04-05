const { cifrarPassword } = require("../validations/validationsUsers");
const { consultById } = require("../DAO/CrudDao");
const validationRol = async (res, username, email, password, roles) => {
  const cifrado = await cifrarPassword(password);
  const error = [];
  var set = "";
  if (roles) {
    const resultado = await consultById("roles", `Nombre="${roles}"`);
    if (resultado.length > 0) {
      const IdRoles = resultado[0]["IdRol"];
      set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=${IdRoles}`;
    } else {
      res.status(400).json({
        message: "No existe ese rol en la BD",
      });
    }
  } else {
    set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=5`;
  }
  return set;
};

module.exports = validationRol;
