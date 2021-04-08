const { Router } = require('express');

const {
  RegisterVeterinario,
  ActualizarVeterinario,
  EliminarVeterinario,
} = require("../controllers/veterinario.controller");
const routerVeterinario = Router();
const { PersonRegisterMessage } = require("../middleware/errorsValidate"); //PRESENTO ERRORES DE VALIDACIONES
const { checkCedulayTelefono } = require("../validations/checkPerson"); //PRESENTO ERROR DE DUPLICACIONES
routerVeterinario.post(
  "/Regitrar-Veterinario",
  [PersonRegisterMessage, checkCedulayTelefono],
  RegisterVeterinario
);

routerVeterinario.put(
  "/Actualizar-Veterinario/:id",
  [PersonRegisterMessage, checkCedulayTelefono],
  ActualizarVeterinario
);

routerVeterinario.delete("/Eliminar-Veterinario/:id", EliminarVeterinario);
module.exports = routerVeterinario;
