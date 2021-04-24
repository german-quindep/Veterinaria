const expresionRegular = require("../expresionRegular");

const validations = {};
//VALIDAR CAMPOS
validations.validateForm = (
  nombre,
  min,
  max,
  descripcion,
  expresionRegular
) => {
  if (!expresionRegular.test(nombre))
    throw new Error(`El campo ${descripcion} debe tener caracteres`);

  if (nombre.length < min || nombre.length >= max)
    throw new Error(
      `El campo ${descripcion} debe tener digitos entre ${min}- ${max}`
    );
};
//VERIFY EMAIL
validations.verifyEmail = (nombre, descripcion, expresionRegular) => {
  if (!expresionRegular.test(nombre))
    throw new Error(
      `El campo ${descripcion} debe tener email ejemplo ejemplo@ejemplo.com`
    );
};
//VERIFY FECHAS
validations.verifyFecha = (fecha) => {
  const validarFecha = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  if (!validarFecha.test(fecha))
    throw new Error(`Debe ingresar una fecha valida`);
  if (!fecha)
    throw new Error(
      `El campo fecha debe tener una fecha en formato YYYY-MM-DD`
    );
};
//VERIFY PASSOWORD
validations.validatePassword = (nombre, max, descripcion, expresionRegular) => {
  if (!expresionRegular.test(nombre))
    throw new Error(`El campo ${descripcion} debe tener caracteres`);
  if (!nombre || nombre.length <= max)
    throw new Error(
      `El campo ${descripcion} debe tener una clave mayor a ${max} digitos`
    );
};
//VERIFY CONFIPASSWORD
validations.confirPassword = (
  nombre,
  verify,
  max,
  descripcion,
  expresionRegular
) => {
  if (!expresionRegular.test(nombre))
    throw new Error(`El campo ${descripcion} debe tener caracteres`);
  if (!nombre || nombre.length <= max)
    throw new Error(
      `El campo ${descripcion} debe tener digitos entre mayor a ${max}`
    );
  if (verify != nombre)
    throw new Error(
      `El campo ${descripcion} debe tener digitos entre ${min}- ${max}`
    );
};
//VERIFY CEDULA Y TELEFONO
validations.CedulaTelefono = (nombre, max, descripcion, expresionRegular) => {
  if (!expresionRegular.test(nombre))
    throw new Error(`El campo ${descripcion} debe tener caracteres`);
  if (!nombre || nombre.length < max)
    throw new Error(
      `El campo ${descripcion} debe tener digitos de ${max} numeros`
    );
};
//VERIFY ID
validations.verifyID = (nombre, descripcion, expresionRegular) => {
  if (!nombre) throw new Error(`El campo ${descripcion} debe estar registrado`);
  if (!expresionRegular.test(nombre))
    throw new Error(`El campo ${descripcion} debe contener numeros`);
};
module.exports = validations;
