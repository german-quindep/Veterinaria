const controllerPerson = {};
const validarPersona = require("../validations/validationPerson");
const { insertBd, updateRegister,deleteRegister } = require("../DAO/CrudDao");
const table = "persona";
//REGISTER PERSON
controllerPerson.RegisterPerson = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const error = validarPersona(req.body);
  if (error) {
    res.json(error);
  } else {
    const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
    const response = await insertBd(table, set);
    if (response) {
      res.status(201).json({
        message: `Se agrego con exito a ${Nombre} ${Apellido}`,
      });
    } else {
      res
        .status(500)
        .json({ messageError: "Error al registrar intentelo mas tarde" });
    }
  }
};
//UPDATE PERSON
controllerPerson.UpdatePerson = async (req, res) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = req.body;
  const { id } = req.params;
  const error = validarPersona(req.body);
  if (error) {
    res.json(error);
  } else {
    const set = `Nombre='${Nombre}',Apellido='${Apellido}',Cedula=${Cedula},Telefono=${Telefono},Direccion='${Direccion}'`;
    const where = `IdPersona=${id}`;
    const response = await updateRegister(table, set, where);
    if (response) {
      res.status(201).json({
        message: `Se actualizo con exito a ${Nombre} ${Apellido}`,
      });
    } else {
      res
        .status(500)
        .json({ messageError: "Error al actualizar intentelo mas tarde" });
    }
  }
};
//DELETE PERSON
controllerPerson.deletePerson = async (req, res) => {
  const { id } = req.params;
  const where = `IdPersona=${id}`;
  const response = await deleteRegister(table, where);
  if (response) {
    res.status(200).json({ message: "Se elimino con exito" });
  } else {
    res.status(500).json({
      messageError:
        "Ocurrio un error al eliminar, vuelva a intentarlo mas tarde",
    });
  }
};

module.exports = controllerPerson;
