const controllerVacunas = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
  allRegister,
  consultById,
} = require("../DAO/CrudDao");
var table = "vacunas";

controllerVacunas.getAllVacunas = async (req, res) => {
  const resp = await allRegister(table);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay datos aun` });
};
controllerVacunas.getIdVacunas = async (req, res) => {
  const where = `IdVacunas=${req.params.id}`;
  const resp = await consultById(table, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay datos aun` });
};
controllerVacunas.registerVacuna = async (req, res) => {
  const set = setData(req.body);
  const resp = await insertBd(table, set);
  if (resp)
    res.status(200).json({
      message: `Exito al registrar la vacuna ${req.body.Tipo_Vacuna}`,
    });
  else
    res.status(400).json({
      message: `Error por favor verifique los datos o intentelo mas tarde`,
    });
};
controllerVacunas.actualizarVacuna = async (req, res) => {
  const set = setData(req.body);
  const where = `IdVacunas=${req.params.id}`;
  const resp = await updateRegister(table, set, where);
  if (resp.affectedRows > 0)
    res.status(200).json({
      message: `Se actualizo con exito la vacuna ${req.body.Tipo_Vacuna}`,
    });
  else
    res.status(400).json({
      message: `Error al actualizar verifique los datos o intentelo mas tarde`,
    });
};

controllerVacunas.eliminarVacuna = async (req, res) => {
  const { id } = req.params;
  const where = `IdVacunas=${id}`;
  const response = await deleteRegister(table, where); //ENVIO EL ID PARA ELIMINAR
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito la vacuna" });
  //SI DIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
};

//OBTENER LA DATA
const setData = (data) => {
  const { Fecha, Tipo_Vacuna, Num_Dosis, IdMascota } = data;
  const set = `Fecha='${Fecha}',Tipo_Vacuna='${Tipo_Vacuna}',Num_Dosis=${Num_Dosis},IdMascota=${IdMascota}`;
  return set;
};

module.exports = controllerVacunas;
