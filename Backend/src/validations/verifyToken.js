const jwt = require('jsonwebtoken');
const config = require('../config');
const verifyToken = (req,res,next)=>{
    const token = req.headers["x-access-token"];
    if (!token) {
      return res.status(401).json({
        auth: false,
        message: "Hace falta un token para hacer la peticion",
      });
    }
    const decode = jwt.verify(token, config.SecretJWT);
    req.UserToken = decode.id; //PARA UTILIZAR EL REQ EN OTROS LADOS EJEMPLO ESTA EN USERSCONTROLLERS UPDATE
    next();
}
module.exports = verifyToken;