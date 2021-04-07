const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const config = require("../config");
const routePerson = require("../routes/persons.routes");
const indexRoutes = (app) => {
  app.use(config.URL_API, usersRoutes); //PARA LOS USUARIOS
  app.use(config.URL_API, authRoutes); //PARA EL LOGIN
  app.use(config.URL_API, routePerson); //PARA LAS PERSONAS
};

module.exports = indexRoutes;
