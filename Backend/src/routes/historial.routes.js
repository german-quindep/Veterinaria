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

const { verifyToken, verifyAdmin } = require("../validations/verifyToken");
//ALL REGISTER
routeHistorial.get("/all-historial", verifyToken, getAllHistorial);
routeHistorial.get("/one-historial/:id", verifyToken, getOneHistorial);
routeHistorial.post(
  "/Registrar-Historial",
  verifyToken,
  verifyAdmin,
  ValidarHistorial,
  Registrar
);
routeHistorial.put(
  "/Actualizar-Historial/:id",
  verifyToken,
  verifyAdmin,
  ValidarHistorial,
  Actualizar
);
routeHistorial.delete(
  "/Eliminar-Historial/:id",
  verifyToken,
  verifyAdmin,
  Eliminar
);

module.exports = routeHistorial;
