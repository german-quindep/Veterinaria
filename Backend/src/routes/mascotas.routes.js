const { Router } = require("express");

const {
  todasLasMascotas,
  UnaMascota,
  ActualizarMascotas,
  EliminarMascotas,
  registerMascotas,
} = require("../controllers/mascotas.controllers");
const { validarMascotas } = require("../middleware/errorsValidate");
const routeMascotas = Router();
//TODAS LAS MASCOTAS
routeMascotas.get("/Mascotas-All", todasLasMascotas);
//REGISTRAR MASCOTAS
routeMascotas.post("/Registrar-Mascotas", validarMascotas, registerMascotas);
//ACTUALIZAR
routeMascotas.put(
  "/Actualizar-Mascotas/:id",
  validarMascotas,
  ActualizarMascotas
);
//UNA MASCOTAS
routeMascotas.get("/Mascotas-one/:id", UnaMascota);
//ELIMINAR
routeMascotas.delete("/Eliminar-Mascotas/:id", EliminarMascotas);

module.exports = routeMascotas;
