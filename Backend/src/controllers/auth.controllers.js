//ARRAY OF FUNCTIONS
const authControllers = {};
const {
  ValidarLogin,
  desencriptarPassword,
} = require("../validations/validationsUsers");
//BOOKSTORES
const jwt = require("jsonwebtoken");
//DAO BD
const tabla = "username";
const { consultById } = require("../DAO/CrudDao");
//CONFIG
const config = require("../config");
//AUTH LOGIN USERS
authControllers.authLogin = async (req, res) => {
  const { username, password } = req.body;
  //QUERY
  const errors = ValidarLogin(username, password);
  if (errors) {
    res.json(errors);
  } else {
    const set = `username = '${username}'`;
    const result = await consultById(tabla, set);
    if (result) {
      if (result.length > 0) {
        const encrypt = result[0]["password"];
        const desencriptar = await desencriptarPassword(password, encrypt);
        if (desencriptar) {
          //GENERO TOKEN
          const token = jwt.sign({ id: username }, config.SecretJWT, {
            expiresIn: 60 * 60 * 24, //EXPIRACIN DEL TOKEN EN DIA
          });
          res.json({ success: "Ingresado con exito", result, token });
        } else {
          res.json({ messageError: "Usuario o contraseña invalido" });
        }
      } else {
        res.json({ messageError: "Usuario o contraseña invalido" });
      }
    } else {
      res.json({
        messageError: "Error al buscar el usuario intentelo mas tarde",
        status: "202",
      });
    }
  }
};

//AUTH CLOSE LOGIN USERS

authControllers.authLogout =(req,res)=>{
    res.json('Close sesion');
}

module.exports = authControllers;
