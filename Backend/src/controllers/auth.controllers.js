//ARRAY OF FUNCTIONS
const authControllers = {};
const {
  ValidarLogin,
  desencriptarPassword,
} = require("../validations/validationsUsers");
//BOOKSTORES
const jwt = require("jsonwebtoken");
//DAO BD
const tabla = "username";
const { consultById } = require("../DAO/CrudDao");
//CONFIG
const config = require("../config");
//AUTH LOGIN USERS
authControllers.authLogin = async (req, res) => {
  const { username, password } = req.body;
  const set = `username = '${username}'`; //ASIGNO EL USER PARA LUEGO HACER CONSULTA
  const result = await consultById(tabla, set); //CONSULTO SI EXISTE
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
