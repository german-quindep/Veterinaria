const { Router } = require("express");
const {
  RegisterUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const { verifyToken, verifyAdmin } = require("../validations/verifyToken");
const routerUser = Router();

routerUser.post("/Registrarse", RegisterUser);

routerUser.put("/actualizar/:id", [verifyToken, verifyAdmin], updateUser);

routerUser.delete("/eliminar/:id", [verifyToken, verifyAdmin], deleteUser);

module.exports = routerUser;
