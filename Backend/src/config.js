module.exports = {
  SecretJWT: process.env.SecretJWT || "SECRECT_TOKENS_ID",
  PORT: process.env.PORT || 3000,
  HOST_BD: process.env.HOST_BD || "localhost",
  User_BD: process.env.User_BD || "root",
  Password_BD: process.env.Password_BD || "",
  Database: process.env.Database || "veterinaria",
  Port_BD: process.env.Port_BD || 3306,
  URL_API: process.env.URL_API || "/api",
  ExpresionString: process.env.ExpresionString || /^[A-Za-z\s]+$/i,
  ExpresionNumber: process.env.ExpresionNumber || /^([0-9])*$/,
  ExpresionStringSpace: process.env.ExpresionStringSpace || /^[A-Za-z0-9\s]+$/g,
  ExpresionEmail:
    process.env.ExpresionEmail ||
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
};

