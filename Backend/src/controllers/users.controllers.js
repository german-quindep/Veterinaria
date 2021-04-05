const usersController = {};
const {
  insertBd,
  consultById,
  updateRegister,
  deleteRegister,
  allRegister,
} = require("../DAO/CrudDao");
const {
  ValidarCamposRegistro,
  ValidarLogin,
  cifrarPassword,
  desencriptarPassword,
} = require("../validations/validationsUsers");
//JWT
const jwt = require("jsonwebtoken");
const config = require('../config');
//NOMBRE DE LA TABLA
const tabla = "username";
//CONTROLLERS USERS
usersController.LoginUser = async (req, res, next) => {
  const { username, password } = req.body;
  //QUERY
  const errors = ValidarLogin(username, password);
  if (errors) {
    res.json(errors);
  } else {
    const set = `username = '${username}'`;
    const result = await consultById(tabla, set);
    if (result) {
      if (result.length > 0) {
        const encrypt = result[0]["password"];
        const desencriptar = await desencriptarPassword(password, encrypt);
        if (desencriptar) {
          //GENERO TOKEN
          const token = jwt.sign({ id: username }, config.secretJWT, {
            expiresIn: 60 * 60 * 24, //EXPIRACIN DEL TOKEN EN DIA
          });
          res.json({ success: "Ingresado con exito", result, token });
        } else {
          res.json({ messageError: "Usuario o contraseña invalido" });
        }
      } else {
        res.json({ messageError: "Usuario o contraseña invalido" });
      }
    } else {
      res.json({
        messageError: "Error al buscar el usuario intentelo mas tarde",
        status: "202",
      });
    }
  }
};
//REGISTRO DE USUARIOS
usersController.RegisterUser = async (req, res, next) => {
  const { username, email, password, verifyPassword } = req.body;
  //connection.query
  const errors = ValidarCamposRegistro(
    username,
    email,
    password,
    verifyPassword
  );
  if (errors) {
    res.json(errors);
  } else {
    const cifrado = await cifrarPassword(password);
    const set = `username='${username}',email='${email}',password='${cifrado}'`;
    const response = await insertBd("tabla", set);
    if (response) {
      //GENERO TOKEN
      const token = jwt.sign({ id: username }, config.secretJWT, {
        expiresIn: 60 * 60 * 24, //EXPIRACIN DEL TOKEN EN DIA
      });
      res.json({ message: "Se registro con exito", username, token });
      next();
    } else {
      res.json({ messageError: "Error al registrar intentelo mas tarde" });
      next();
    }
  }
};

module.exports = usersController;
