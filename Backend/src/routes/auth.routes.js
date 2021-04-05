const { Router } = require("express");
const routerAuth = Router();
const { authLogin, authLogout } = require("../controllers/auth.controllers");

routerAuth.post("/iniciar-sesion", authLogin);

routerAuth.post("/cerrar-sesion", authLogout);

module.exports = routerAuth;
