const validarPersona = (data) => {
  const { Nombre, Apellido, Cedula, Telefono, Direccion } = data;
  const errors = [];
  //PARA VALIDAR LOS CAMPOS DE LETRAS
  if (typeof Nombre !== "string") {
    errors.push({
      text: "Debe contener caracteres el nombre",
    });
  }
  //EXPRESION REGULAR ADMITE LETRAS MAYUSCULA MINISCULA Y ESPACIOS
  if (!/^[A-Za-z\s]+$/i.test(Nombre)) {
    errors.push({
      text: "Solo se permite letras en el campo nombre",
    });
  }
  if (Nombre.length < 3 || Nombre.length >= 25) {
    errors.push({
      text:
        "Falta llenar el campo nombre, recuerde debe estar entre 2 a 25 digitos",
    });
  }
  if (typeof Apellido !== "string") {
    errors.push({
      text: "Debe contener caracteres el apellido",
    });
  }
  if (!/^[A-Za-z\s]+$/i.test(Apellido)) {
    errors.push({
      text: "Solo se permite letras en el campo apellido",
    });
  }
  if (Apellido.length < 3 || Apellido.length >= 25) {
    errors.push({
      text:
        "Falta llenar el campo apellido, recuerde debe estar entre 2 a 25 digitos",
    });
  }
  //PARA VALIDAR LOS CAMPOS DE NUMEROS
  if (typeof Cedula !== "string") {
    errors.push({
      text: "Debe contener numeros el campo cedula",
    });
  }
  if (!Cedula || Cedula.length < 10) {
    errors.push({
      text: "Debe contener un maximo de 10 digitos en la cedula",
    });
  }
  //EXPRESION REGULAR ADMITE SOLO NUMEROS CON VARIOS DIGITOS SIN ESPACIOS
  if (!/^([0-9])*$/.test(Cedula)) {
    errors.push({
      text: "Debe contener solo numeros el campo cedula sin espacios",
    });
  }
  //VALIDACION DEL TELEFONO
  if (typeof Telefono !== 'string') {
    errors.push({
      text: "Debe contener numeros el campo telefono",
    });
  }
  if (!Telefono || Telefono.length < 10) {
    errors.push({
      text: "Debe contener un maximo de 10 digitos en la telefono",
    });
  }
  if (!/^([0-9])*$/.test(Telefono)) {
    errors.push({
      text: "Debe contener solo numeros el campo telefono sin espacios",
    });
  }
  //PARA VALIDAR LOS CAMPOS DE NUMEROS Y LETRAS
  if (typeof Direccion !== "string") {
    errors.push({
      text: "Debe contener caracteres el direccion",
    });
  }
  if (Direccion.length < 5 || Direccion.length >= 50) {
    errors.push({
      text: "Debe contener caracteres entre 5 a 50  el campo direccion",
    });
  }
  //EXPRESION REGULAR QUE ADMITE NUMEROS, LETRAS MAYUS Y MINIS, CON ESPACIOS
  if (!/^[A-Za-z0-9\s]+$/g.test(Direccion)) {
    errors.push({
      text: "Debe contener caracteres el campo direccion",
    });
  }
  //SI HAY ERRORES RETURNO LOS ERRORES
  if (errors.length > 0) {
    return errors;
  }
};

module.exports = validarPersona;
