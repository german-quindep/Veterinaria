const controllerVeterinario = {};
const { insertBd, updateRegister, deleteRegister } = require("../DAO/CrudDao");
var table = "veterinario";

//REGISTRAR
controllerVeterinario.RegisterVeterinario = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
  const response = await insertBd(table, set); //ENVIO A LA BD LO QUE INGRESO EL USUARIO
  if (response)
    //SI VIENE ALGO RESPONDO EXITO
    res.status(201).json({
      message: `Se agrego con exito al veterinario ${Nombre} ${Apellido}`,
    });
  //SI HAY ERRORES
  else
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
};

//ACTUALIZAR
controllerVeterinario.ActualizarVeterinario = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const { id } = req.params;
  const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
  const where = `IdVeterinario=${id}`;
  const response = await updateRegister(table, set, where); //ENVIO LA PETICION DE ACTUALIZAR CON LOS DATOS
  if (response)
    //SI OBTUVO EXITO
    res.status(201).json({
      message: `Se actualizo con exito al veterinario ${Nombre} ${Apellido}`,
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
  if (response)
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito al veterinario" });
  //SI DIO UN ERROR
  else
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
};

module.exports = controllerVeterinario;
