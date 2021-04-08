const validateHistorial = (data) => {
  const errors = [];
  const expresionString = /^[A-Za-z0-9\s]+$/g;
  const validarFecha = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  const { Fecha, Motivo, Diagnostico } = data;
  //FECHA VALIDATE
  if (!validarFecha.test(Fecha))
    errors.push({ text: "Ingrese una fecha valida" });
  if (!Fecha) error.push({ text: "Debe especificar una fecha" });
  //MOTIVO VALIDATE
  if (Motivo.length < 5 || Motivo.length >= 255)
    errors.push({
      text: "Debe contener caracteres entre 5 a 255  el campo Motivo",
    });
  if (!expresionString.test(Motivo))
    errors.push({
      text: "Ingrese valores validos en la caja de texto Motivo",
    });
  //VALIDATE DIAGNOSTICO
  if (Diagnostico.length < 5 || Diagnostico.length >= 255)
    errors.push({
      text: "Debe contener caracteres entre 5 a 255  el campo Diagnostico",
    });
  if (!/^[A-Za-z0-9\s]+$/g.test(Diagnostico))
    errors.push({
      text: "Ingrese valores validos en la caja de texto Diagnostico",
    });
  //SI HAY ERRORES RETURNO LOS ERRORES
  if (errors.length > 0) return errors;
};

module.exports = validateHistorial;
