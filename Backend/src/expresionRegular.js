module.exports = {
    ExpresionStringNumber: process.env.ExpresionStringNumber|| /^[A-Za-z0-9]+$/g,//PARA NUMEROS Y LETRAS
    ExpresionString: process.env.ExpresionString || /^[A-Za-z\s]+$/i, //STRING CON ESPACIOS
    ExpresionNumber: process.env.ExpresionNumber || /^([0-9])*$/, //SOLO NUMEROS Y MUCHOS NUMEROS
    ExpresionStringSpace: process.env.ExpresionStringSpace || /^[A-Za-z0-9\s]+$/g,//SOL NUMEROS LETRAS CONE SPACIOS
    ExpresionEmail:
      process.env.ExpresionEmail ||
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, //SOLO EMAIL

};
