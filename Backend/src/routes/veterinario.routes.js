const { Router } = require("express");

const {
  RegisterVeterinario,
  ActualizarVeterinario,
  EliminarVeterinario,
  getAllVeterinario,
  oneVeterinario,
} = require("../controllers/veterinario.controller");
const routerVeterinario = Router();
const { PersonRegisterMessage } = require("../middleware/errorsValidate"); //PRESENTO ERRORES DE VALIDACIONES
const { checkCedulayTelefono } = require("../validations/checkPerson"); //PRESENTO ERROR DE DUPLICACIONES

const { verifyToken, verifyAdmin } = require("../validations/verifyToken");
//TODOS LOS VETERINARIOS
routerVeterinario.get("/Todos-Veterinario", verifyToken, getAllVeterinario);
//UN VETERINARIO
routerVeterinario.get("/Un-Veterinario/:id", verifyToken, oneVeterinario);
//AGREGAR
routerVeterinario.post(
  "/Regitrar-Veterinario",
  [PersonRegisterMessage, checkCedulayTelefono],
  verifyToken,
  verifyAdmin,
  RegisterVeterinario
);
//ACTUALIZAR
routerVeterinario.put(
  "/Actualizar-Veterinario/:id",
  [PersonRegisterMessage, checkCedulayTelefono],
  verifyToken,
  verifyAdmin,
  ActualizarVeterinario
);
//ELIMINAR
routerVeterinario.delete(
  "/Eliminar-Veterinario/:id",
  verifyToken,
  verifyAdmin,
  EliminarVeterinario
);
module.exports = routerVeterinario;
