const controllerPerson = {};
const { insertBd, updateRegister, deleteRegister } = require("../DAO/CrudDao");
const table = "persona";
//REGISTER PERSON
controllerPerson.RegisterPerson = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
  const response = await insertBd(table, set); //ENVIO A LA BD LO QUE INGRESO EL USUARIO
  if (response) {
    //SI VIENE ALGO RESPONDO EXITO
    res.status(201).json({
      message: `Se agrego con exito a ${Nombre} ${Apellido}`,
    });
    return res.send(Cedula);
  } else {
    //SI HAY ERRORES
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
  }
};
//UPDATE PERSON
controllerPerson.UpdatePerson = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const { id } = req.params;
  const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
  const where = `IdPersona=${id}`;
  const response = await updateRegister(table, set, where); //ENVIO LA PETICION DE ACTUALIZAR CON LOS DATOS
  if (response) {
    //SI OBTUVO EXITO
    res.status(201).json({
      message: `Se actualizo con exito a ${Nombre} ${Apellido}`,
    });
  } else {
    //SI OCURRIO UN ERROR
    res
      .status(500)
      .json({ messageError: "Error al actualizar intentelo mas tarde" });
  }
};
//DELETE PERSON
controllerPerson.deletePerson = async (req, res) => {
  const { id } = req.params;
  const where = `IdPersona=${id}`;
  const response = await deleteRegister(table, where); //ENVIO EL ID PARA ELIMINAR
  if (response) {
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito" });
  } else {
    //SI DIO UN ERROR
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
  }
};

module.exports = controllerPerson;
