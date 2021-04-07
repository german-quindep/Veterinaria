const { cifrarPassword } = require("../validations/validationsUsers");
const { consultById } = require("../DAO/CrudDao");
const validationRol = async (data) => {
  const { username, email, password, roles, IdPersona } = data;
  const cifrado = await cifrarPassword(password); //CIFRO LA CONTRASEÑA
  var set = "";
  if (roles) {
    //EXISTE EL ROL
    const resultado = await consultById("roles", `Nombre="${roles}"`);
    const IdRoles = resultado[0]["IdRol"];
    //ENVIO EL SET PARA LUEGO ASIGNARLO A LA BD CON SU RESPECTIVO ROL
    set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=${IdRoles},IdPersona=${IdPersona}`;
  } else {
    //SI NO EXISTE
    //ENVIO EL SET CON EL ROL DE CLIENTE
    set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=5,IdPersona=${IdPersona}`;
  }
  return set;
};

module.exports = validationRol;
