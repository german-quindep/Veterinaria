const usersController = {};
const { insertBd, updateRegister, deleteRegister } = require("../DAO/CrudDao");
//VALIDAR CAMPOS
const {
  ValidarCamposRegistro,
  cifrarPassword,
} = require("../validations/validationsUsers");
//JWT
const jwt = require("jsonwebtoken");
//CONFIG
const config = require("../config");
//NAME TABLE BD
const tabla = "username";
//REGISTER USER
usersController.RegisterUser = async (req, res) => {
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
    const response = await insertBd(tabla, set);
    if (response) {
      //GENERO TOKEN
      const token = jwt.sign({ id: username }, config.SecretJWT, {
        expiresIn: 60 * 60 * 24, //EXPIRACION DEL TOKEN EN DIA
      });
      res.json({ message: "Se registro con exito", username, token });
    } else {
      res.json({ messageError: "Error al registrar intentelo mas tarde" });
    }
  }
};
//UPDATE
usersController.updateUser = async (req, res) => {
  const { username, email, password, verifyPassword } = req.body;
  //VERIFY TOKEN
  /*const idUser = req.UserToken;
  console.log(idUser);*/
  const { id } = req.params;
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
    const where = `IdUser=${id}`;
    const response = await updateRegister(tabla, set, where);
    if (response) {
      //RESPONSE
      res.json({ message: "Se actualizo con exito", username });
    } else {
      res.json({ messageError: "Error al registrar intentelo mas tarde" });
    }
  }
};
//DELETE USER
usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  const where = `IdUser=${id}`;
  const response = await deleteRegister(tabla, where);
  if (response) {
    res.json({ message: "Se elimino con exito" });
  } else {
    res.json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
  }
};
module.exports = usersController;
