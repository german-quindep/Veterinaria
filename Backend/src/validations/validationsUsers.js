const bcrypt = require("bcryptjs");
const userValidation = {};
//VALIDE REGISTER USERS
const expresionString = /^[A-Za-z0-9]+$/g; //EXPRESION STRING
const expresionEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; //EXPRESION EMAIL
userValidation.ValidarCamposRegistro = (data) => {
  const { username, email, password, verifyPassword, IdPersona } = data;
  const errors = [];
  if (!username || username.length < 2)
    errors.push({
      text: "Falta el campo username, recuerde debe tener mas de dos digitos",
    });
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!expresionString.test(username))
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  //EMAIL VERIFY
  if (!email || !expresionEmail.test(email))
    errors.push({
      text: "Debe ingresar un email correcto",
    });
  //VERIFY PASSWORD
  if (!password || password.length <= 4)
    errors.push({
      text: "Debe tener mas digitos su contraseña",
    });
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!expresionString.test(password))
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  //VERIFY COMPARATION VERIFYPASSWORD AND PASSWORD
  if (!verifyPassword || password != verifyPassword)
    errors.push({
      text: "No coincide la contraseña",
    });
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!expresionString.test(verifyPassword))
    errors.push({
      text: "Debe contener caracteres el campo verificar Contraseña",
    });
  //IDPERSON NULL?
  if (!IdPersona)
    errors.push({
      text: "Debe estar registrado con sus datos personales",
    });
  /*if(!typeof email !== 'string')*/
  if (errors.length > 0) return errors;
};
//VALIDATE LOGIN
userValidation.ValidarLogin = (data) => {
  const { username, password } = data;
  const errors = [];
  //VERIFY USERNAME
  if (!username || username.length < 2)
    errors.push({
      text: "Debe tener mas digitos el usuario",
    });

  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!expresionString.test(username))
    errors.push({
      text: "Debe contener caracteres el campo username",
    });

  if (!password || password.length <= 4)
    errors.push({
      text: "Debe tener mas digitos su contraseña",
    });

  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, SIN ESPACIOS
  if (!expresionString.test(password))
    errors.push({
      text: "Debe contener caracteres el campo password",
    });

  if (errors.length > 0) return errors;
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
