const { consultById } = require("../DAO/CrudDao");

const checkRegister = {};
checkRegister.chekUserOrEmail = async (req, res, next) => {
  try {
    const whereUser = `username="${req.body.username}"`;
    const resultUser = await consultById("username", whereUser);
    const whereEmail = `email="${req.body.email}"`;
    const resultEmail = await consultById("username", whereEmail);
    if (resultUser.length > 0) {
      return res.status(401).json({
        message: `El usuario ${req.body.username} ya se encuentra registrado`,
      });
    }
    if (resultEmail.length > 0) {
      return res.status(401).json({
        message: `El email ${req.body.email} ya se encuentra registrado`,
      });
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

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

module.exports = checkRegister;
