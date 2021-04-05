const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const config = require("../config");

const indexRoutes = (app) => {
  app.use(config.URL_API,usersRoutes);
  app.use(config.URL_API, authRoutes);
};

module.exports = indexRoutes;
