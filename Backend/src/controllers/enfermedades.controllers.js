const controllerEnferme = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
  allRegister,
  consultById,
} = require("../DAO/CrudDao.js");

var table = "enfermedades";
//GET ALL ENFERMEDADES
controllerEnferme.getAllEnfermedades = async (req, res) => {
  const resp = await allRegister(table);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay datos disponibles` });
};
//GET ONE ENFERMEDADES
controllerEnferme.getOneEnfermedades = async (req, res) => {
  const where = `IdEnfermedades=${req.params.id}`;
  const resp = await consultById(table, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay datos disponibles` });
};
//REGISTRAR
controllerEnferme.Registrar = async (req, res) => {
  const set = setData(req.body);
  const resp = await insertBd(table, set);
  if (resp) res.status(200).json({ message: "Exito al registrar" });
  else
    res.status(400).json({ message: "Ocurrio un error vuelva a intentarlo" });
};

//ACTUALIZAR
controllerEnferme.Actualizar = async (req, res) => {
  const { id } = req.params;
  const set = setData(req.body);
  const where = `IdEnfermedades=${id}`;
  const resp = await updateRegister(table, set, where);
  if (resp.affectedRows > 0)
    res.status(200).json({ message: "Exito al actualizar" });
  else
    res.status(400).json({ message: "Ocurrio un error vuelva a intentarlo" });
};
//Eliminar
controllerEnferme.Eliminar = async (req, res) => {
  const { id } = req.params;
  const where = `IdEnfermedades=${id}`;
  const resp = await deleteRegister(table, where);
  if (resp.affectedRows > 0)
    res.status(200).json({ message: "Exito al eliminar" });
  else
    res.status(400).json({ message: "Ocurrio un error vuelva a intentarlo" });
};

//OBTENER LA DATA
const setData = (data) => {
  const { Descripcion, Sintomas, IdHistorial } = data;
  const set = `Descripcion='${Descripcion}',Sintomas='${Sintomas}',IdHistorial=${IdHistorial}`;
  return set;
};

module.exports = controllerEnferme;
