const messageErrors = {};
const {
  validateForm,
  CedulaTelefono,
  verifyEmail,
  validatePassword,
  confirPassword,
  verifyFecha,
  verifyID,
} = require("../validations/validationsForm");
const config = require("../expresionRegular"); //CONFIG DE EXPRESIONES REGULARES
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
  CedulaTelefono(Cedula, 10, "cedula", config.ExpresionNumber);
  CedulaTelefono(Telefono, 10, "telefono", config.ExpresionNumber);
  validateForm(Direccion, 5, 50, "direccion", /^[A-Za-z0-9\s]+$/g);
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
  validateForm(Descripcion, 3, 255, "descripcion", /^[A-Za-z0-9\s]+$/g);
  validateForm(Sintomas, 3, 255, "sintomas", /^[A-Za-z0-9\s]+$/g);
  verifyID(IdHistorial, "Id Historial", config.ExpresionNumber);
  next();
};
//VALIDAR CAMPO DE MASCOTAS
messageErrors.validarMascotas = (req, res, next) => {
  const {
    Nombre,
    FechaNacimiento,
    Edad,
    Raza,
    Color,
    Peso,
    Especie,
    IdUser,
    IdVeterinario,
    IdHistorial,
  } = req.body;
  validateForm(Nombre, 3, 20, "Nombre de la mascota", /^[A-Za-z0-9\s]+$/g);
  verifyFecha(FechaNacimiento);
  validateForm(Edad,1, 3, "Edad de la mascota", config.ExpresionNumber);
  validateForm(Raza, 3, 20, "Raza de la mascota", config.ExpresionString);
  validateForm(
    Color,
    3,
    25,
    "Color de la mascota",
    config.ExpresionString
  );
  validateForm(Peso,1, 3, "Peso de la mascota", config.ExpresionNumber);
  validateForm(Especie, 3, 20, "Especie", config.ExpresionString);
  verifyID(IdUser, "usuario", config.ExpresionNumber);
  verifyID(IdVeterinario, "veterinario", config.ExpresionNumber);
  verifyID(IdHistorial, "historial", config.ExpresionNumber);
  next();
};
module.exports = messageErrors;
