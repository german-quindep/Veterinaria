const { Router } = require('express');

const {
  RegisterVeterinario,
  ActualizarVeterinario,
  EliminarVeterinario,
  getAllVeterinario,
  oneVeterinario
} = require("../controllers/veterinario.controller");
const routerVeterinario = Router();
const { PersonRegisterMessage } = require("../middleware/errorsValidate"); //PRESENTO ERRORES DE VALIDACIONES
const { checkCedulayTelefono } = require("../validations/checkPerson"); //PRESENTO ERROR DE DUPLICACIONES
//TODOS LOS VETERINARIOS
routerVeterinario.get('/Todos-Veterinario',getAllVeterinario);
//UN VETERINARIO
routerVeterinario.get('/Un-Veterinario/:id',oneVeterinario);
//AGREGAR
routerVeterinario.post(
  "/Regitrar-Veterinario",
  [PersonRegisterMessage, checkCedulayTelefono],
  RegisterVeterinario
);
//ACTUALIZAR
routerVeterinario.put(
  "/Actualizar-Veterinario/:id",
  [PersonRegisterMessage, checkCedulayTelefono],
  ActualizarVeterinario
);
//ELIMINAR
routerVeterinario.delete("/Eliminar-Veterinario/:id", EliminarVeterinario);
module.exports = routerVeterinario;
