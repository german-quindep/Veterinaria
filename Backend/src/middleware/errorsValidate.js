const messageErrors = {};
//VALIDAR CAMPOS
const {
  ValidarCamposRegistro,
  ValidarLogin,
} = require("../validations/validationsUsers");
const validarPersona = require("../validations/validationPerson");
const validateHistorial = require("../validations/validationHistorial.js");
messageErrors.regisErrorMessage = (req, res, next) => {
  const errors = ValidarCamposRegistro(req.body);
  if (errors) return res.status(400).json(errors); //EXISTE ERRORES?
  next();
};
messageErrors.LoginErrorMessage = (req, res, next) => {
  const errors = ValidarLogin(req.body);
  if (errors) return res.status(400).json(errors); //EXISTE ERRORES?
  next();
};
messageErrors.PersonRegisterMessage = (req, res, next) => {
  const errors = validarPersona(req.body);
  if (errors) return res.status(400).json(errors);
  next();
};
messageErrors.RegisterHistorialMessage = (req, res, next) => {
  const errors = validateHistorial(req.body);
  if (errors) return res.status(400).json(errors);
  next();
};
module.exports = messageErrors;
