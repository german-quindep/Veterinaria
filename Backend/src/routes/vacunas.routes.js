const { Router } = require("express");
const {
  registerVacuna,
  actualizarVacuna,
  eliminarVacuna,
} = require("../controllers/vacunas.controller");
const routeVacunas = Router();
const { validarVacunas } = require("../middleware/errorsValidate");
routeVacunas.post("/Registrar-Vacuna", validarVacunas, registerVacuna);
routeVacunas.put("/Actualizar-Vacuna/:id", validarVacunas, actualizarVacuna);
routeVacunas.delete("/Eliminar-Vacuna/:id", eliminarVacuna);

module.exports = routeVacunas;
