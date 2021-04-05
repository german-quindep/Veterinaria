const { Router } = require("express");
const {
  LoginUser,
  RegisterUser,
} = require("../controllers/users.controllers");
const routerUser = Router();

routerUser.post("/iniciar-sesion", LoginUser);

routerUser.post("/Registrarse", RegisterUser);

module.exports = routerUser;
