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
const { verifyToken, verifyAdmin } = require("../validations/verifyToken");
routeVacunas.get("/all-vacunas", verifyToken, getAllVacunas);
routeVacunas.get("/one-vacunas/:id", verifyToken, getIdVacunas);
routeVacunas.post(
  "/Registrar-Vacuna",
  verifyToken,
  verifyAdmin,
  validarVacunas,
  registerVacuna
);
routeVacunas.put(
  "/Actualizar-Vacuna/:id",
  verifyToken,
  verifyAdmin,
  validarVacunas,
  actualizarVacuna
);
routeVacunas.delete(
  "/Eliminar-Vacuna/:id",
  verifyToken,
  verifyAdmin,
  eliminarVacuna
);

module.exports = routeVacunas;
