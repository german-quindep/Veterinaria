const mascotasControllers = {};

const {
  allRegister,
  insertBd,
  updateRegister,
  deleteRegister,
  consultById,
} = require("../DAO/CrudDao");
var table = "mascota";
//TODAS LAS MASCTOAS
mascotasControllers.todasLasMascotas = async (req, res) => {
  const resp = await allRegister(table);
  if (resp.length > 0) res.status(200).json(resp);
  else
    res
      .status(400)
      .json({ message: `Aun no existen registros de las mascotas` });
};
//REGISTRAR MASCOTAS
mascotasControllers.registerMascotas = async (req, res) => {
  const set = setData(req.body);
  const resp = await insertBd(table, set);
  if (resp)
    res
      .status(200)
      .json({ message: `Se registro con exito a la mascota ${req.body.Nombre}` });
  else
    res.status(400).json({
      message:
        "Ocurrio un error vuelva al registrar intentelo mas tarde o verifique los datos",
    });
};
//ACTUALIZAR MASCOTAS
mascotasControllers.ActualizarMascotas = async (req, res) => {
  const set = setData(req.body);
  var where = `IdMascota=${req.params.id}`;
  const resp = await updateRegister(table, set, where);
  if (resp.affectedRows > 0)
    //SI HAY EXITO
    res
      .status(200)
      .json({ message: `Se actualizo con exito a la mascota ${req.body.Nombre}` });
  //SI OCURRIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Error al actualizar intentelo mas tarde o verifique los datos",
    });
};
//UNA MASCOTAS
mascotasControllers.UnaMascota = async (req, res) => {
  const { id } = req.params;
  const where = `IdMascota=${id}`;
  const resp = await consultById(table, where);
  if (resp.length > 0) res.status(200).json(resp);
  else res.status(400).json({ message: `No hay registro de la mascota` });
};
//ELIMINAR LA MASCOTAS
mascotasControllers.EliminarMascotas = async (req, res) => {
  const { id } = req.params;
  const where = `IdMascota=${id}`;
  const response = await deleteRegister(table, where); //ENVIO EL ID PARA ELIMINAR
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito a la masctoa" });
  //SI DIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
};
//OBTENGO LA DATA
const setData = (data) => {
  const {
    Nombre,
    FechaNacimiento,
    Edad,
    Raza,
    Color,
    Peso,
    Especie,
    IdUser,
    IdVeterinario,
    IdHistorial,
  } = data;
  const set = `Nombre='${Nombre}',FechaNacimiento='${FechaNacimiento}',Edad=${Edad},Raza='${Raza}',Color='${Color}',Peso=${Peso},Especie='${Especie}',IdUser=${IdUser},IdVeterinario=${IdVeterinario},IdHistorial=${IdHistorial}`;
  return set;
};
module.exports = mascotasControllers;
