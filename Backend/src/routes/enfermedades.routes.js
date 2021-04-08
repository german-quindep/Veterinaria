const { Router } = require("express");
const {Registrar,Actualizar,Eliminar}=require('../controllers/enfermedades.controllers');
const routeEnfermedades = Router();

const {registerEnfermeMessage,updateEnfermMessage}=require('../middleware/errorsValidate');

routeEnfermedades.post("/Registrar-Enfermedades",registerEnfermeMessage,Registrar);

routeEnfermedades.put("/Actualizar-Enfermedades/:id",updateEnfermMessage,registerEnfermeMessage,Actualizar);

routeEnfermedades.delete("/Eliminar-Enfermedades/:id",Eliminar);

module.exports = routeEnfermedades;
