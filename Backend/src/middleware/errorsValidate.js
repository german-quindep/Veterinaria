const messageErrors = {};
//VALIDAR CAMPOS
const {
  ValidarCamposRegistro,
  ValidarLogin,
} = require("../validations/validationsUsers");
const validarPersona = require("../validations/validationPerson");
const validateHistorial = require("../validations/validationHistorial.js");
const {formRegisterEnfer,updateRegisterEnfer} = require('../validations/validationEnfemerdades');
//REGISTRO DE CAMPOS USER
messageErrors.regisErrorMessage = (req, res, next) => {
  const errors = ValidarCamposRegistro(req.body);
  if (errors) return res.status(400).json(errors); //EXISTE ERRORES?
  next();
};
//CAMPOS LOGIN
messageErrors.LoginErrorMessage = (req, res, next) => {
  const errors = ValidarLogin(req.body);
  if (errors) return res.status(400).json(errors); //EXISTE ERRORES?
  next();
};
//REGISTRO CAMPO DE PERSONAS
messageErrors.PersonRegisterMessage = (req, res, next) => {
  const errors = validarPersona(req.body);
  if (errors) return res.status(400).json(errors);
  next();
};
//REGISTRO CAMPO HISTORIAL
messageErrors.RegisterHistorialMessage = (req, res, next) => {
  const errors = validateHistorial(req.body);
  if (errors) return res.status(400).json(errors);
  next();
};
//REGISTRO CAMPO ENFERMEDADES
messageErrors.registerEnfermeMessage=(req,res,next)=>{
  const errors= formRegisterEnfer(req.body);
  if(errors)return res.status(400).json(errors);
  next();
}
//REGISTRO UPDATE ENFERMEDADES
messageErrors.updateEnfermMessage=(req,res,next)=>{
  const errors=updateRegisterEnfer(req.params);
  if(errors)return res.status(400).json(errors);
  next();
}
module.exports = messageErrors;
