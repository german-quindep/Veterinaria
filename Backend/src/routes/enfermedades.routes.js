const { Router } = require("express");
const {Registrar,Actualizar,Eliminar}=require('../controllers/enfermedades.controllers');
const routeEnfermedades = Router();

const {validarEnfermedades}=require('../middleware/errorsValidate');

routeEnfermedades.post("/Registrar-Enfermedades",validarEnfermedades,Registrar);

routeEnfermedades.put("/Actualizar-Enfermedades/:id",validarEnfermedades,Actualizar);

routeEnfermedades.delete("/Eliminar-Enfermedades/:id",Eliminar);

module.exports = routeEnfermedades;
