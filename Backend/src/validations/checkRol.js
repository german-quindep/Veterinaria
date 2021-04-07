const { consultById } = require("../DAO/CrudDao");
const checkRegister = {};
//CHEQUEO EL USER O EMAIL
checkRegister.chekUserOrEmail = async (req, res, next) => {
  try {
    const whereUser = `username="${req.body.username}"`;
    const resultUser = await consultById("username", whereUser); //CONSULTO EL USUARIO
    const whereEmail = `email="${req.body.email}"`;
    const resultEmail = await consultById("username", whereEmail); //CONSULTO AL EMAIL
    if (resultUser.length > 0)
      //PREGUNTO SI EXISTE USUARIO
      return res.status(401).json({
        message: `El usuario ${req.body.username} ya se encuentra registrado`,
      });

    if (resultEmail.length > 0)
      //PREGUNTO SI EXISTE EMAIL
      return res.status(401).json({
        message: `El email ${req.body.email} ya se encuentra registrado`,
      });

    next(); //OK
  } catch (error) {
    console.log(error);
  }
};
//CHEQUERO DE ROLES
checkRegister.checkRoles = async (req, res, next) => {
  try {
    if (req.body.roles) {
      const where = `Nombre="${req.body.roles}"`;
      const result = await consultById("roles", where);
      if (!result.length) {
        return res.status(401).json({
          message: `No existe el ${req.body.roles} en la Base de datos`,
        });
      }
    }
    next();
  } catch (err) {
    res.status(401).json({
      message: `No existe el ${req.body.roles} en la Base de datos`,
    });
  }
};
//CHEKEO EL PARAMTRO DE CEDULA
checkRegister.paramsRegisterUSer = async (req, res, next) => {
  const cedula = req.params.id;
  if (cedula) {
    const whereCedula = `Cedula=${cedula}`;
    const respCedula = await consultById("persona", whereCedula);
    if (respCedula.length > 0) {
      return res
        .status(200)
        .json({
          message: `Si se encuentra registrada con id ${respCedula[0]["IdPersona"]}`,
        });
    } else {
      return res
        .status(400)
        .json({ message: `La cedula ${cedula} no se encuentra registrada` });
    }
  } else
    return res
      .status(400)
      .json({ message: "Primero debe registrar sus datos personales" });
};
checkRegister.PersonIdCheck = async (req, res, next) => {
  const { IdPersona } = req.body;
  if (IdPersona) {
    const respPersona = await consultById("persona", `IdPersona=${IdPersona}`);
    if (respPersona.length > 0) next();
    else
      return res
        .status(400)
        .json({ message: `El id ${IdPersona} no se encuentra registrada` });
  }else
  return res
  .status(400)
  .json({ message: "No se puede procesar la informacion" });
};

module.exports = checkRegister;
