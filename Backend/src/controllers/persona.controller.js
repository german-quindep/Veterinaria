const controllerPerson = {};
const {
  insertBd,
  updateRegister,
  consultById,
  deleteRegister,
  allRegister,
} = require("../DAO/CrudDao");
const table = "persona";

controllerPerson.getAllPerson = async (req, res) => {
  const resp = await allRegister(table);
  if (resp.length > 0) res.status(200).json(resp);
  else
    res
      .status(400)
      .json({ message: `Aun no existen registros de las personas` });
};
//GET ONE PERSONA
controllerPerson.getOnePerson = async (req, res) => {
  const { id } = req.params;
  const where = `IdPersona=${id}`;
  const resp = await consultById(table, where);
  if (resp.length > 0) res.status(200).json(resp);
  else
    res.status(400).json({ message: `Aun no existen registros de la persona` });
};
//REGISTER PERSON
controllerPerson.RegisterPerson = async (req, res) => {
  const set = setData(req.body);
  const response = await insertBd(table, set); //ENVIO A LA BD LO QUE INGRESO EL USUARIO
  if (response)
    //SI VIENE ALGO RESPONDO EXITO
    res.status(201).json({
      message: `Se agrego con exito a ${req.body.Nombre} ${req.body.Apellido}`,
      result: response.insertId,
    });
  //return res.send(Cedula);
  //SI HAY ERRORES
  else
    res
      .status(500)
      .json({ messageError: "Error al registrar intentelo mas tarde" });
};
//UPDATE PERSON
controllerPerson.UpdatePerson = async (req, res) => {
  const { id } = req.params;
  const set = setData(req.body);
  const where = `IdPersona=${id}`;
  const response = await updateRegister(table, set, where); //ENVIO LA PETICION DE ACTUALIZAR CON LOS DATOS
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(201).json({
      message: `Se actualizo con exito a ${req.body.Nombre} ${req.body.Apellido}`,
    });
  //SI OCURRIO UN ERROR
  else
    res
      .status(500)
      .json({ messageError: "Error al actualizar intentelo mas tarde" });
};
//DELETE PERSON
controllerPerson.deletePerson = async (req, res) => {
  const { id } = req.params;
  const where = `IdPersona=${id}`;
  const response = await deleteRegister(table, where); //ENVIO EL ID PARA ELIMINAR
  if (response.affectedRows > 0)
    //SI OBTUVO EXITO
    res.status(200).json({ message: "Se elimino con exito" });
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

module.exports = controllerPerson;
