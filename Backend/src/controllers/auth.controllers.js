//ARRAY OF FUNCTIONS
const authControllers = {};
const {
  desencriptarPassword,
} = require("../validations/validationsUsers");
//BOOKSTORES
const jwt = require("jsonwebtoken");
const { getJoinRestriccion } = require("../DAO/CrudDao");
//CONFIG
const config = require("../config");
//AUTH LOGIN USERS
authControllers.authLogin = async (req, res) => {
  const { username, password } = req.body;
  const table="us.username,us.email,us.password,rol.Nombre as Rol,per.nombre,per.cedula from username as us"
  const join="persona as per ON us.IdPersona=per.IdPersona JOIN roles as rol ON us.IdRoles=rol.IdRol"
  const set = `username = '${username}'`; //ASIGNO EL USER PARA LUEGO HACER CONSULTA
  const result = await getJoinRestriccion(table,join, set); //CONSULTO SI EXISTE
  if (result) {
    //PREGUNTO SI TIENE ALGO LA PETICION
    if (result.length > 0) {
      const encrypt = result[0]["password"]; //GUARDO EL PASSWORD ENCRYPTADO
      const desencriptar = await desencriptarPassword(password, encrypt); //DESENCRIPTO
      if (desencriptar) {
        //SI ES VERDADERO ASIGNO EL TOKEN
        //GENERO TOKEN
        const token = jwt.sign({ id: username }, config.SecretJWT, {
          expiresIn: 60 * 60 * 24, //EXPIRACIN DEL TOKEN EN DIA
        });
        res.json({ success: "Ingresado con exito", result, token }); //ENVIO EL TOKEN
      } else {
        res.json({ messageError: "Usuario o contraseña invalido" }); //SI FALLA EL PASSWORD
      }
    } else {
      res.json({ messageError: "Usuario o contraseña invalido" }); //SI FALLA EL USUARIO
    }
  } else {
    //PRESENTO ERROR SI FALLA LA PETICION
    res.json({
      messageError: "Error al buscar el usuario intentelo mas tarde",
      status: 202,
    });
  }
};

//AUTH CLOSE LOGIN USERS

authControllers.authLogout = (req, res) => {
  res.json("Close sesion");
};

module.exports = authControllers;
