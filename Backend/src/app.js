const express = require("express");
const routesIndex = require("./routes/index.routes");
const app = express();
const middlewareErrors = require("./middleware/errorsMiddleware");
const middlewareCors=require('./middleware/corsMiddleware');
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//CORS
app.use(middlewareCors);
//RUTAS
routesIndex(app);

//MIDDLEWARES DE ERRORS
app.use(middlewareErrors);



module.exports = app;
