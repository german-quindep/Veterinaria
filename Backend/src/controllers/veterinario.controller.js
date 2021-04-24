const controllerVeterinario = {};
const {
  insertBd,
  updateRegister,
  deleteRegister,
  allRegister,
  consultById,
} = require("../DAO/CrudDao");
var table = "veterinario";

//GET ALL VETERINARIO
controllerVeterinario.getAllVeterinario = async (req, res) => {
  const response = await allRegister(table);
  if (response.length > 0) res.status(200).json(response);
  else res.status(400).json({ message: "No hay datos aun registrados" });
};
//UN VETERINARIO
controllerVeterinario.oneVeterinario = async (req, res) => {
  const where = `IdVeterinario=${req.params.id}`;
  const response = await consultById(table, where);
  if (response.length > 0) res.status(200).json(response);
  else res.status(400).json({ message: "No hay datos aun registrados" });
};
//REGISTRAR
controllerVeterinario.RegisterVeterinario = async (req, res) => {
  const set = setData(req.body);
  const response = await insertBd(table, set); //ENVIO A LA BD LO QUE INGRESO EL USUARIO
  if (response)
    //SI VIENE ALGO RESPONDO EXITO
    res.status(201).json({
      message: `Se agrego con exito al veterinario ${req.body.Nombre} ${req.body.Apellido}`,
    });
  //SI HAY ERRORES
  else
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
};

//ACTUALIZAR
controllerVeterinario.ActualizarVeterinario = async (req, res) => {
  const { id } = req.params;
  const set = setData(req.body);
  const where = `IdVeterinario=${id}`;
  const response = await updateRegister(table, set, where); //ENVIO LA PETICION DE ACTUALIZAR CON LOS DATOS
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(201).json({
      message: `Se actualizo con exito al veterinario ${req.body.Nombre} ${req.body.Apellido}`,
    });
  //SI OCURRIO UN ERROR
  else
    res
      .status(500)
      .json({ messageError: "Error al actualizar intentelo mas tarde" });
};

//ELIMINAR

controllerVeterinario.EliminarVeterinario = async (req, res) => {
  const { id } = req.params;
  const where = `IdVeterinario=${id}`;
  const response = await deleteRegister(table, where); //ENVIO EL ID PARA ELIMINAR
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito al veterinario" });
  //SI DIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
};
//OBTENER LA DATA
const setData = (data) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = data;
  const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
  return set;
};
module.exports = controllerVeterinario;
