const usersController = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
  allRegister,
  getJoinRestriccion,
} = require("../DAO/CrudDao");
//JWT
const jwt = require("jsonwebtoken");
//CONFIG
const config = require("../config");
const validationRol = require("../validations/validationRol");
//NAME TABLE BD
const tabla = "username";
//GET USERS
usersController.getAllUser = async (req, res) => {
  const resp = await allRegister(tabla);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay usuarios` });
};
//GET ONE USERS
usersController.getOneUsers = async (req, res) => {
  const table = `us.username,us.email,rol.Nombre,per.nombre,per.cedula from username as us`;
  const join = `persona as per ON us.IdPersona=per.IdPersona JOIN roles as rol ON us.IdRoles=rol.IdRol`;
  const where = `IdUser=${req.params.id}`;
  const resp = await getJoinRestriccion(table, join, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay usuarios` });
};
//REGISTER USER
usersController.RegisterUser = async (req, res) => {
  const { username, email } = req.body;
  const set = await validationRol(req.body); //VALIDO Y ENVIO EL SET NECESARIO
  const response = await insertBd(tabla, set); //ENVIO EL SET PARA LA BD
  if (response) {
    //SI HAY EXITO
    //GENERO TOKEN
    const token = jwt.sign({ id: username }, config.SecretJWT, {
      expiresIn: 60 * 60 * 24, //EXPIRACION DEL TOKEN EN DIA
    });
    res
      .status(200)
      .json({
        message: "Se registro con exito",
        username,
        email,
        token,
        rol: "Cliente",
      });
  } else {
    //SI OCURRIO UN ERROR
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
  }
};
//UPDATE
usersController.updateUser = async (req, res) => {
  const { username } = req.body;
  //VERIFY TOKEN
  /*const idUser = req.UserToken;
  console.log(idUser);*/
  const { id } = req.params;
  const set = await validationRol(req.body); //VALIDO QUE INGRESE UN ROL VALIDO
  const where = `IdUser=${id}`;
  const response = await updateRegister(tabla, set, where); //ENVIO LOS DATOS PARA ACTUALIZAR
  if (response.affectedRows > 0)
    //SI HAY EXITO
    res.status(200).json({ message: "Se actualizo con exito", username });
  //SI OCURRIO UN ERROR
  else
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
};
//DELETE USER
usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  const where = `IdUser=${id}`;
  const response = await deleteRegister(tabla, where); //ENVIO EL ID PARA ELIMINAR
  if (response.affectedRows > 0)
    //SI HAY EXITO
    res.status(204).json({ message: "Se elimino con exito" });
  // SI OCURRIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
};
module.exports = usersController;
