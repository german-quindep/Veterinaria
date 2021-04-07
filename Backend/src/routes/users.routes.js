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
const { regisErrorMessage } = require("../middleware/errorsValidate");
const routerUser = Router();
//GET
routerUser.get("/Registrarse/:id", paramsRegisterUSer);
//POST
routerUser.post(
  "/Registrarse",
  [checkRoles, chekUserOrEmail, regisErrorMessage, PersonIdCheck],
  RegisterUser
);
//PUT
routerUser.put(
  "/actualizar/:id",
  [checkRoles, chekUserOrEmail, regisErrorMessage],
  updateUser
);
//DELETE
routerUser.delete("/eliminar/:id", [verifyToken, verifyAdmin], deleteUser);

module.exports = routerUser;
