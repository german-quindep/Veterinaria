const jwt = require("jsonwebtoken");
const config = require("../config");
const { consultById, getJoinConsult } = require("../DAO/CrudDao");
const verify = {};
var table = "username";
verify.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"]; //PREGUNTO SI VIENE DE LA CABEZERA EL TOKEN
    if (!token) {
      //SI NO HAY TOKEN
      return res.status(401).json({
        auth: false,
        message: "Hace falta un token para hacer la peticion",
      });
    }
    const decode = jwt.verify(token, config.SecretJWT); //VERIFICO EL TOKEN
    req.UserToken = decode.id; //PARA UTILIZAR EL REQ EN OTROS LADOS EJEMPLO ESTA EN USERSCONTROLLERS UPDATE
    var set = `username="${req.UserToken}"`;
    const userAutorizacion = await consultById(table, set); //ENVIO LA CONSULTA
    if (!userAutorizacion)
      return res.status(404).json({ message: "No encontrado el usuario" }); //SI ESTA EN LA BD
    next();
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" }); //ERROR
  }
};
//ROL ADMIN
verify.verifyAdmin = async (req, res, next) => {
  try {
    const rolUserHeader = req.headers["x-rol-user"];
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${rolUserHeader}"`;
    console.log(join,where);
    const rolAutorizacion = await getJoinConsult(table, join, where); //JOIN PARA LA CONSULTA
    const rolUser = rolAutorizacion[0]["Nombre"];
    if (rolUser == "Administrador") {
      //SI ES ADMIN
      next();
      return;
    } //SI NO ES ADMIN
    res.status(403).json({ message: "No tiene el rol suficiente" });
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" });
  }
};
//ROL EMPLEADO
verify.verifyEmploye = async (req, res, next) => {
  try {
    const rolUserHeader = req.headers["x-rol-user"];
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${rolUserHeader}"`;
    const rolAutorizacion = await getJoinConsult(table, join, where);
    const rolUser = rolAutorizacion[0]["Nombre"];
    if (rolUser == "Empleado") {
      next();
      return;
    }
    res.status(403).json({ message: "No tiene el rol suficiente" });
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" });
  }
};
//ROL CLIENTE
verify.verifyClient = async (req, res, next) => {
  try {
    const rolUserHeader = req.headers["x-rol-user"];
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${rolUserHeader}"`;
    const rolAutorizacion = await getJoinConsult(table, join, where);
    const rolUser = rolAutorizacion[0]["Nombre"];
    if (rolUser == "Cliente") {
      next();
      return;
    }
    res.status(403).json({ message: "No tiene el rol suficiente" });
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" });
  }
};
module.exports = verify;
