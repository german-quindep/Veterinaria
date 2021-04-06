const { Router } = require("express");
const {
  RegisterPerson,
  UpdatePerson,
  deletePerson,
} = require("../controllers/persona.controller");
const routePerson = Router();

routePerson.post("/Registrar-Persona", RegisterPerson);

routePerson.put("/Actualizar-Persona/:id", UpdatePerson);
routePerson.delete("/Eliminar-Persona/:id", deletePerson);
module.exports = routePerson;
