const { Router } = require("express");

const {
  todasLasMascotas,
  UnaMascota,
  ActualizarMascotas,
  EliminarMascotas,
  registerMascotas,
  verDetallesMascotas,
} = require("../controllers/mascotas.controllers");
const { validarMascotas } = require("../middleware/errorsValidate");
const routeMascotas = Router();
const { verifyToken, verifyAdmin } = require("../validations/verifyToken"); //SE VERIFICA EL TOKEN CON ROLES
//TODAS LAS MASCOTAS
routeMascotas.get("/Mascotas-All", verifyToken, todasLasMascotas);
//REGISTRAR MASCOTAS
routeMascotas.post(
  "/Registrar-Mascotas",
  verifyToken,
  verifyAdmin,
  validarMascotas,
  registerMascotas
);
//ACTUALIZAR
routeMascotas.put(
  "/Actualizar-Mascotas/:id",
  verifyToken,
  verifyAdmin,
  validarMascotas,
  ActualizarMascotas
);
//UNA MASCOTAS
routeMascotas.get("/Mascotas-one/:id", verifyToken, UnaMascota);
//ELIMINAR
routeMascotas.delete(
  "/Eliminar-Mascotas/:id",
  verifyToken,
  verifyAdmin,
  EliminarMascotas
);
//VER DETALLES
routeMascotas.get("/Detalles-Mascotas/:id", verifyToken, verDetallesMascotas);
module.exports = routeMascotas;
