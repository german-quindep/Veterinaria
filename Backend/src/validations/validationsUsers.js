const bcrypt = require("bcryptjs");
const userValidation = {};
const { consultById } = require("../DAO/CrudDao");
//VALIDE REGISTER USERS
userValidation.ValidarCamposRegistro = (data) => {
  const { username, email, password, verifyPassword, IdPersona } = data;
  const errors = [];
  if (!username || username.length < 2) {
    errors.push({
      text: "Falta el campo username, recuerde debe tener mas de dos digitos",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!/^[A-Za-z0-9]+$/g.test(username)) {
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  }
  if (
    !email ||
    !/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      email
    )
  ) {
    errors.push({
      text: "Debe ingresar un email correcto",
    });
  }
  if (!password || password.length <= 4) {
    errors.push({
      text: "Debe tener mas digitos su contraseña",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!/^[A-Za-z0-9]+$/g.test(password)) {
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  }
  if (!verifyPassword || password != verifyPassword) {
    errors.push({
      text: "No coincide la contraseña",
    });
  }
  if (!IdPersona) {
    errors.push({
      text: "Debe estar registrado con sus datos personales",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!/^[A-Za-z0-9]+$/g.test(verifyPassword)) {
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  }
  /*if(!typeof email !== 'string')*/
  if (errors.length > 0) {
    return errors;
  }
};
//VALIDATE LOGIN
userValidation.ValidarLogin = (data) => {
  const { username, password } = data;
  const errors = [];
  if (!username || username.length < 2) {
    errors.push({
      text: "Debe tener mas digitos el usuario",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!/^[A-Za-z0-9]+$/g.test(username)) {
    errors.push({
      text: "Debe contener caracteres el campo username",
    });
  }
  if (!password || password.length <= 4) {
    errors.push({
      text: "Debe tener mas digitos su contraseña",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!/^[A-Za-z0-9]+$/g.test(password)) {
    errors.push({
      text: "Debe contener caracteres el campo password",
    });
  }
  if (errors.length > 0) {
    return errors;
  }
};
//ENCRYPTAR PASSWORD
userValidation.cifrarPassword = async (password) => {
  const salt = await bcrypt.genSalt(10); //CUANTAS VECES APLICAR ALGORITMO
  return await bcrypt.hash(password, salt);
};
//DESENCRIPTAR Y COMPRAR PASSWORD
userValidation.desencriptarPassword = async (password, encrypPass) => {
  return await bcrypt.compare(password, encrypPass);
};
module.exports = userValidation;
