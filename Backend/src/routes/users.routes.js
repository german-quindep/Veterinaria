const { Router } = require("express");
const {
  RegisterUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");

const routerUser = Router();

routerUser.post("/Registrarse", RegisterUser);

routerUser.put("/actualizar/:id",updateUser);

routerUser.delete("/eliminar/:id",deleteUser);

module.exports = routerUser;
