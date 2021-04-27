const { Router } = require("express");
const {
  registerVacuna,
  actualizarVacuna,
  eliminarVacuna,
  getAllVacunas,
  getIdVacunas,
} = require("../controllers/vacunas.controller");
const routeVacunas = Router();
const { validarVacunas } = require("../middleware/errorsValidate");
routeVacunas.get("/all-vacunas", getAllVacunas);
routeVacunas.get("/one-vacunas/:id", getIdVacunas);
routeVacunas.post("/Registrar-Vacuna", validarVacunas, registerVacuna);
routeVacunas.put("/Actualizar-Vacuna/:id", validarVacunas, actualizarVacuna);
routeVacunas.delete("/Eliminar-Vacuna/:id", eliminarVacuna);

module.exports = routeVacunas;
