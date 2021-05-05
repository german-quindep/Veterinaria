const { Router } = require("express");
const {
  Registrar,
  Actualizar,
  Eliminar,
  getAllEnfermedades,
  getOneEnfermedades,
} = require("../controllers/enfermedades.controllers");
const routeEnfermedades = Router();

const { verifyToken, verifyAdmin } = require("../validations/verifyToken");
const { validarEnfermedades } = require("../middleware/errorsValidate");

routeEnfermedades.get("/all-enfermedades", verifyToken, getAllEnfermedades);
routeEnfermedades.get("/one-Enfermedades/:id", verifyToken, getOneEnfermedades);
routeEnfermedades.post(
  "/Registrar-Enfermedades",
  verifyToken,
  verifyAdmin,
  validarEnfermedades,
  Registrar
);

routeEnfermedades.put(
  "/Actualizar-Enfermedades/:id",
  verifyToken,
  verifyAdmin,
  validarEnfermedades,
  Actualizar
);

routeEnfermedades.delete(
  "/Eliminar-Enfermedades/:id",
  verifyToken,
  verifyAdmin,
  Eliminar
);

module.exports = routeEnfermedades;
