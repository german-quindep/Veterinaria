const {cifrarPassword}=require('../validations/validationsUsers');
const {consultById} = require("../DAO/CrudDao");
const validationRol = async(username,email,password,roles)=>{
    const cifrado = await cifrarPassword(password);
    var set="";
    if (roles) {
        const resultado = await consultById("roles", `Nombre="${roles}"`);
        const IdRoles = resultado[0]["IdRol"];
        set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=${IdRoles}`;
      } else {
        set = `username='${username}',email='${email}',password='${cifrado}',IdRoles=5`;
      }
      return set;
}

module.exports = validationRol;