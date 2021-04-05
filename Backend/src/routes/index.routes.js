const usersRoutes = require("./users.routes");
const authRoutes = require("./auth.routes");
const config = require("../config");
const verifyToken = require('../validations/verifyToken');
const indexRoutes = (app) => {
  app.use(config.URL_API, verifyToken,usersRoutes);
  app.use(config.URL_API, authRoutes);
};

module.exports = indexRoutes;
