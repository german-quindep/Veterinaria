const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const config = require("../config");
const routePerson = require("../routes/persons.routes");
const indexRoutes = (app) => {
  app.use(config.URL_API, usersRoutes);
  app.use(config.URL_API, authRoutes);
  app.use(config.URL_API, routePerson);
};

module.exports = indexRoutes;
