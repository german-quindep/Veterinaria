const historial = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
} = require("../DAO/CrudDao.js");
//TABLA BD
var table = "historial";
//REGISTER
historial.Registrar = async (req, res) => {
  const { Fecha, Motivo, Diagnostico } = req.body;
  const set = `Fecha='${Fecha}',Motivo='${Motivo}',Diagnostico='${Diagnostico}'`;
  const resp = await insertBd(table, set);
  if (resp)
    res.status(201).json({ message: `Se a creado con exito el historial` });
  else
    res.status(500).json({ message: `Ocurrio un error intentelo mas tarde` });
};
//UPDATE
historial.Actualizar = async (req, res) => {
  const { Fecha, Motivo, Diagnostico } = req.body;
  const { id } = req.params;
  const set = `Fecha='${Fecha}',Motivo='${Motivo}',Diagnostico='${Diagnostico}'`;
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
  if (resp.affectedRows>0) res.status(200).json({ message: `Se elimino con exito` });
  else
    res
      .status(400)
      .json({ message: `Ocurrio un error vuelva a intentarlo mas tarde` });
};

module.exports = historial;
