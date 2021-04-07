const { Router } = require("express");
const routerAuth = Router();
const { authLogin, authLogout } = require("../controllers/auth.controllers");
const {LoginErrorMessage}=require('../middleware/errorsValidate');

routerAuth.get('/iniciar-sesion');
routerAuth.post("/iniciar-sesion", LoginErrorMessage,authLogin);

routerAuth.post("/cerrar-sesion", authLogout);

module.exports = routerAuth;
