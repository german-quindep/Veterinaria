const express = require("express");
const routesIndex = require("./routes/index.routes");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//RUTAS
routesIndex(app);

module.exports = app;
