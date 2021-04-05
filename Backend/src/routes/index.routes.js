const usersRoutes = require("./users.routes");
const url = "/api";
const indexRoutes = (app) => {
  app.use(url, usersRoutes);
};

module.exports = indexRoutes;
