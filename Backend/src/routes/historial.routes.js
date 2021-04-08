const { Router } = require("express");
const routeHistorial = Router();
const { RegisterHistorialMessage } = require("../middleware/errorsValidate");
const {
  Registrar,
  Actualizar,
} = require("../controllers/historial.controllers");
routeHistorial.post(
  "/Registrar-Historial",
  RegisterHistorialMessage,
  Registrar
);
routeHistorial.put(
  "/Actualizar-Historial/:id",
  RegisterHistorialMessage,
  Actualizar
);
routeHistorial.delete("/Eliminar-Registro/:id");

module.exports = routeHistorial;
