const bcrypt = require("bcryptjs");
const userValidation = {};
//VALIDE REGISTER USERS
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
