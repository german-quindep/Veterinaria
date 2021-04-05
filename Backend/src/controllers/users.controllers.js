const usersController = {};
const { insertBd, updateRegister, deleteRegister } = require("../DAO/CrudDao");
//VALIDAR CAMPOS
const { ValidarCamposRegistro } = require("../validations/validationsUsers");
//JWT
const jwt = require("jsonwebtoken");
//CONFIG
const config = require("../config");
const validationRol = require("../validations/validationRol");
//NAME TABLE BD
const tabla = "username";
//REGISTER USER
usersController.RegisterUser = async (req, res) => {
  const { username, email, password, verifyPassword, roles } = req.body;
  const errors = ValidarCamposRegistro(
    username,
    email,
    password,
    verifyPassword
  );
  if (errors) {
    res.json(errors);
  } else {
    const set = await validationRol(res, username, email, password, roles);
    const response = await insertBd(tabla, set);
    if (response) {
      //GENERO TOKEN
      const token = jwt.sign({ id: username }, config.SecretJWT, {
        expiresIn: 60 * 60 * 24, //EXPIRACION DEL TOKEN EN DIA
      });
      res
        .status(201)
        .json({ message: "Se registro con exito", username, token });
    } else {
      res
        .status(500)
        .json({ messageError: "Error al registrar intentelo mas tarde" });
    }
  }
};
//UPDATE
usersController.updateUser = async (req, res) => {
  const { username, email, password, verifyPassword, roles } = req.body;
  //VERIFY TOKEN
  /*const idUser = req.UserToken;
  console.log(idUser);*/
  const { id } = req.params;
  const errors = ValidarCamposRegistro(
    username,
    email,
    password,
    verifyPassword
  );
  if (errors) {
    res.json(errors);
  } else {
    const set = await validationRol(username, email, password, roles);
    const where = `IdUser=${id}`;
    const response = await updateRegister(tabla, set, where);
    if (response) {
      //RESPONSE
      res.status(200).json({ message: "Se actualizo con exito", username });
    } else {
      res
        .status(500)
        .json({ messageError: "Error al registrar intentelo mas tarde" });
    }
  }
};
//DELETE USER
usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  const where = `IdUser=${id}`;
  const response = await deleteRegister(tabla, where);
  if (response) {
    res.status(204).json({ message: "Se elimino con exito" });
  } else {
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
  }
};
module.exports = usersController;
