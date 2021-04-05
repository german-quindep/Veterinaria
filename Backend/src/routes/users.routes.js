const { Router } = require("express");
const {
  LoginUser,
  RegisterUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const routerUser = Router();

routerUser.post("/iniciar-sesion", LoginUser);

routerUser.post("/Registrarse", RegisterUser);

routerUser.put("/actualizar/:id", updateUser);

routerUser.delete("/eliminar/:id", deleteUser);

module.exports = routerUser;
