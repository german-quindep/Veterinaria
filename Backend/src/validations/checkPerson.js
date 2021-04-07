const { consultById } = require("../DAO/CrudDao");
const checkPerson = {};

checkPerson.checkCedulayTelefono = async (req, res, next) => {
  try {
    var tabla = "persona";
    const whereCedula = `Cedula=${req.body.Cedula}`;
    const resultCedula = await consultById(tabla, whereCedula);
    const whereTelefono = `Telefono=${req.body.Telefono}`;
    const resultTelefono = await consultById(tabla, whereTelefono);
    if (resultCedula.length > 0)
      //SI HAY ALGO EN CEDULA
      return res.status(401).json({
        message: `La cedula ${req.body.Cedula} ya se encuentra registrada`,
      });
    if (resultTelefono.length > 0)
      //SI HAY ALGO EN TELEFONO
      return res.status(401).json({
        message: `El telefono ${req.body.Telefono} ya se encuentra registrada`,
      });
    next(); //OK
  } catch (error) {
    console.log(error);
  }
};

module.exports = checkPerson;
