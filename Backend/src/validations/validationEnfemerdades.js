const validateEnfermedad = {};

validateEnfermedad.formRegisterEnfer = (data) => {
  var expresion = /^[A-Za-z0-9\s]+$/g; //EXPRESION REGULAR
  const { Descripcion, Sintomas, IdHistorial } = data;
  const errors = [];
  if (Descripcion.length < 5 || Descripcion.length >= 255)
    errors.push({
      message: "Debe contener caracteres entre 5 a 50  el campo Descricion",
    });
  if (!expresion.test(Descripcion))
    errors.push({
      message: "Debe ingresar algo valido en la caja de texto Descripcion",
    });
  if (Sintomas.length < 5 || Sintomas.length >= 255)
    errors.push({
      message: "Debe contener caracteres entre 5 a 50  el campo Sintomas",
    });
  if (!/^[A-Za-z0-9\s]+$/g.test(Sintomas))
    errors.push({
      message: "Debe ingresar algo valido en la caja de texto Sintomas",
    });
  //IDHISTORIAL NULL?
  if (!IdHistorial)
    errors.push({
      message: "Debe estar registrado con algun historial clinico",
    });
  if (!/^([0-9])*$/.test(IdHistorial))
    errors.push({
      message: "Debe ser solamente numeros el identificador",
    });
  if (errors.length > 0) return errors;
};
validateEnfermedad.updateRegisterEnfer = (data) => {
  const { id } = data;
  const errors=[];
  if (!/^([0-9])*$/.test(id))
    errors.push({
      message: "Debe ingresar un id conocido",
    });
  if (errors.length > 0) return errors;
};
module.exports = validateEnfermedad;
