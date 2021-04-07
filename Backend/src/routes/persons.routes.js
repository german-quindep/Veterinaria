//LIBRARY
const { Router } = require("express");
const {
  RegisterPerson,
  UpdatePerson,
  deletePerson,
} = require("../controllers/persona.controller"); //CRUD CONTROLLER
const routePerson = Router();
const { PersonRegisterMessage } = require("../middleware/errorsValidate"); //PRESENTO ERRORES DE VALIDACIONES
const { checkCedulayTelefono } = require("../validations/checkPerson"); //PRESENTO ERROR DE DUPLICACIONES

//GET
routePerson.get('/Registrar-Persona');
//POST
routePerson.post(
  "/Registrar-Persona",
  [PersonRegisterMessage, checkCedulayTelefono],
  RegisterPerson
);
routePerson.put(
  "/Actualizar-Persona/:id",
  [PersonRegisterMessage, checkCedulayTelefono],
  UpdatePerson
);
routePerson.delete("/Eliminar-Persona/:id", deletePerson);
module.exports = routePerson;
