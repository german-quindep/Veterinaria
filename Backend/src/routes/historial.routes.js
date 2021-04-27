const { Router } = require("express");
const routeHistorial = Router();
const { ValidarHistorial } = require("../middleware/errorsValidate");
const {
  Registrar,
  Actualizar,
  Eliminar,
  getAllHistorial,
  getOneHistorial,
} = require("../controllers/historial.controllers");
//ALL REGISTER
routeHistorial.get("/all-historial", getAllHistorial);
routeHistorial.get("/one-historial/:id", getOneHistorial);
routeHistorial.post("/Registrar-Historial", ValidarHistorial, Registrar);
routeHistorial.put("/Actualizar-Historial/:id", ValidarHistorial, Actualizar);
routeHistorial.delete("/Eliminar-Historial/:id", Eliminar);

module.exports = routeHistorial;
