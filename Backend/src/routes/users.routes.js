const { Router } = require("express");
const {
  RegisterUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const { verifyToken, verifyAdmin } = require("../validations/verifyToken"); //SE VERIFICA EL TOKEN CON ROLES
const {
  checkRoles,
  chekUserOrEmail,
  paramsRegisterUSer,
  PersonIdCheck,
} = require("../validations/checkRol.js"); //SE VERIFICA EL ROL Y EMAIL SI EXISTEN
const { regisUsersVerify } = require("../middleware/errorsValidate");
const routerUser = Router();
//GET
routerUser.get("/Registrarse/:id", paramsRegisterUSer);
//POST
routerUser.post(
  "/Registrar-User",
  [regisUsersVerify,checkRoles, chekUserOrEmail, PersonIdCheck],
  RegisterUser
);
//PUT
routerUser.put(
  "/actualizar-User/:id",
  [regisUsersVerify,checkRoles, chekUserOrEmail, PersonIdCheck],
  updateUser
);
//DELETE
routerUser.delete("/Eliminar-User/:id", deleteUser);

module.exports = routerUser;
