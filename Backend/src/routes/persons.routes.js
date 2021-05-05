//LIBRARY
const { Router } = require("express");
const {
  RegisterPerson,
  UpdatePerson,
  deletePerson,
  getOnePerson,
  getAllPerson,
} = require("../controllers/persona.controller"); //CRUD CONTROLLER
const routePerson = Router();
const { PersonRegisterMessage } = require("../middleware/errorsValidate"); //PRESENTO ERRORES DE VALIDACIONES
const { checkCedulayTelefono } = require("../validations/checkPerson"); //PRESENTO ERROR DE DUPLICACIONES
const { verifyToken} = require("../validations/verifyToken"); //SE VERIFICA EL TOKEN CON ROLES
//GET
routePerson.get("/Todas-Persona", verifyToken, getAllPerson);
//GET ONE PERSON
routePerson.get("/one-Persona/:id", verifyToken, getOnePerson);
//POST
routePerson.post(
  "/Registrar-Persona",
  [PersonRegisterMessage, checkCedulayTelefono],
  RegisterPerson
);
routePerson.put(
  "/Actualizar-Persona/:id",
  verifyToken,
  [PersonRegisterMessage],
  UpdatePerson
);
routePerson.delete("/Eliminar-Persona/:id", verifyToken, deletePerson);
module.exports = routePerson;
