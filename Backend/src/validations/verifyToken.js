const jwt = require("jsonwebtoken");
const config = require("../config");
const { consultById, getJoinRegister } = require("../DAO/CrudDao");
const verify = {};
var table = "username";
verify.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: "Hace falta un token para hacer la peticion",
      });
    }
    const decode = jwt.verify(token, config.SecretJWT);
    req.UserToken = decode.id; //PARA UTILIZAR EL REQ EN OTROS LADOS EJEMPLO ESTA EN USERSCONTROLLERS UPDATE
    var set = `username="${req.UserToken}"`;
    const userAutorizacion = await consultById(table, set);
    if (!userAutorizacion)
      return res.status(404).json({ message: "No encontrado el usuario" });
    next();
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" });
  }
};
verify.verifyAdmin = async (req, res, next) => {
  try {
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${req.UserToken}"`;
    const rolAutorizacion = await getJoinRegister(table, join, where);
    const rolUser = rolAutorizacion[0]["Nombre"];
    if (rolUser == "Administrador") {
      next();
      return;
    }
    res.status(403).json({ message: "No tiene el rol suficiente" });
  } catch (error) {
    res.status(401).json({ message: "No esta autorizado" });
  }
};
verify.verifyEmploye = async (req, res, next) => {
  try {
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${req.UserToken}"`;
    const rolAutorizacion = await getJoinRegister(table, join, where);
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
verify.verifyClient = async (req, res, next) => {
  try {
    var join = `as user JOIN roles as rol ON user.IdRoles=rol.IdRol`;
    var where = `user.username="${req.UserToken}"`;
    const rolAutorizacion = await getJoinRegister(table, join, where);
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
