const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const config = require("../config");
const routePerson = require("./persons.routes");
const routeVeterinario = require("./veterinario.routes");
const routeHistorial = require("./historial.routes");
const routeEnfermedades = require("./enfermedades.routes");
const routeMascotas = require("./mascotas.routes");
const indexRoutes = (app) => {
  app.use(config.URL_API, usersRoutes); //PARA LOS USUARIOS
  app.use(config.URL_API, authRoutes); //PARA EL LOGIN
  app.use(config.URL_API, routePerson); //PARA LAS PERSONAS
  app.use(config.URL_API, routeVeterinario); //PARA LOS VETERINARIOS
  app.use(config.URL_API, routeHistorial); //PARA EL HISOTIRAL DE MASCOTA
  app.use(config.URL_API, routeEnfermedades); //PARA LAS ENFERMEDADES DE LAS MASCOTAS
  app.use(config.URL_API, routeMascotas); //PARA LAS MASCOTAS
};

module.exports = indexRoutes;
