const historial = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
  allRegister,
  getJoinConsult,
  consultById,
} = require("../DAO/CrudDao.js");
//TABLA BD
var table = "historial";
//ALREGISTER
historial.getAllHistorial = async (req, res) => {
  const resp = await allRegister(table);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: "No hay registros" });
};
//TRAER EL HISTORIAL Y ENFERMEDAD DE LA MASCOTA
historial.getHistoEnferMascotas = async (req, res) => {
  const join =
    "as his JOIN enfermedades as enfer on his.IdHistorial=enfer.IdHistorial";
  const where = `his.IdHistorial=${req.params.id}`;
  const resp = await getJoinConsult(table, join, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: "No hay registros" });
};
historial.getOneHistorial = async (req, res) => {
  const where = `IdHistorial=${req.params.id}`;
  const resp = await consultById(table, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay registro` });
};
//REGISTER
historial.Registrar = async (req, res) => {
  const set = setData(req.body);
  const resp = await insertBd(table, set);
  if (resp)
    res.status(201).json({ message: `Se a creado con exito el historial` });
  else
    res.status(500).json({ message: `Ocurrio un error intentelo mas tarde` });
};
//UPDATE
historial.Actualizar = async (req, res) => {
  const { id } = req.params;
  const set = setData(req.body);
  const where = `IdHistorial=${id}`;
  const resp = await updateRegister(table, set, where);
  if (resp.affectedRows > 0)
    res.status(200).json({ message: `Se actualizo con exito el historial` });
  else
    res.status(400).json({ message: `Ocurrio un error intentelo mas tarde` });
};
//DELETE
historial.Eliminar = async (req, res) => {
  const { id } = req.params;
  const where = `IdHistorial=${id}`;
  const resp = await deleteRegister(table, where);
  if (resp.affectedRows > 0)
    res.status(200).json({ message: `Se elimino con exito` });
  else
    res
      .status(400)
      .json({ message: `Ocurrio un error vuelva a intentarlo mas tarde` });
};

//OBTENER LA DATA
const setData = (data) => {
  const { Fecha, Motivo, Diagnostico } = data;
  const set = `Fecha='${Fecha}',Motivo='${Motivo}',Diagnostico='${Diagnostico}'`;
  return set;
};
module.exports = historial;
