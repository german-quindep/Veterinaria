const { Router } = require("express");
const routeHistorial = Router();
const { ValidarHistorial } = require("../middleware/errorsValidate");
const {
  Registrar,
  Actualizar,
  Eliminar
} = require("../controllers/historial.controllers");
routeHistorial.post(
  "/Registrar-Historial",
  ValidarHistorial,
  Registrar
);
routeHistorial.put(
  "/Actualizar-Historial/:id",
  ValidarHistorial,
  Actualizar
);
routeHistorial.delete("/Eliminar-Historial/:id",Eliminar);

module.exports = routeHistorial;
