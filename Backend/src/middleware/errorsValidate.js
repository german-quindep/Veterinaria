const messageErrors = {};
const {
  validateForm,
  CedulaYTelefono,
  verifyEmail,
  validatePassword,
  confirPassword,
  verifyFecha,
  verifyID,
} = require("../validations/validationsForm");
const config = require("../config");
//REGISTRO DE CAMPOS USER
messageErrors.regisUsersVerify = (req, res, next) => {
  const { username, email, password, verifyPassword, IdPersona } = req.body;
  validateForm(username, 3, 25, "username", /^[A-Za-z0-9]+$/g);
  verifyEmail(email, "email", config.ExpresionEmail);
  validatePassword(password, 4, "password", /^[A-Za-z0-9]+$/g);
  confirPassword(
    verifyPassword,
    password,
    4,
    "confirmar password",
    /^[A-Za-z0-9]+$/g
  );
  verifyID(IdPersona, "Id Persona", config.ExpresionNumber);
  next();
};
//CAMPOS LOGIN
messageErrors.LoginErrorMessage = (req, res, next) => {
  const { username, password } = req.body;
  //VALIDACION DE CAMPOS LOGIN
  validateForm(username, 3, 25, "username", /^[A-Za-z0-9]+$/g);
  validateForm(password, 4, 15, "password", /^[A-Za-z0-9]+$/g);
  next();
};
//REGISTRO CAMPO DE PERSONAS
messageErrors.PersonRegisterMessage = (req, res, next) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  //VALIDACION FORM NOMBRE APELLIDO CEDULA TELEFONO DIRECCION
  validateForm(Nombre, 3, 25, "nombre", config.ExpresionString);
  validateForm(Apellido, 3, 25, "apellido", config.ExpresionString);
  CedulaYTelefono(Cedula, 10, "cedula", config.ExpresionNumber);
  CedulaYTelefono(Telefono, 10, "telefono", config.ExpresionNumber);
  validateForm(Direccion, 5, 50, "direccion", config.ExpresionStringSpace);
  next(); //SI SE CUMPLE QUE SIGA LA SIGUIENTE FUNCION
};
//REGISTRO CAMPO HISTORIAL
messageErrors.ValidarHistorial = (req, res, next) => {
  const { Fecha, Motivo, Diagnostico } = req.body;
  verifyFecha(Fecha);
  validateForm(Motivo, 3, 255, "motivo", /^[A-Za-z0-9\s]+$/g);
  validateForm(Diagnostico, 3, 255, "diagnostico", /^[A-Za-z0-9\s]+$/g);
  next();
};
//REGISTRO CAMPO ENFERMEDADES
messageErrors.validarEnfermedades = (req, res, next) => {
  const { Descripcion, Sintomas, IdHistorial } = req.body;
  validateForm(Descripcion, 3, 255, "descripcion", config.ExpresionString);
  validateForm(Sintomas, 3, 255, "sintomas", /^[A-Za-z0-9\s]+$/g);
  verifyID(IdHistorial, "Id Historial", config.ExpresionNumber);
  next();
};
module.exports = messageErrors;
