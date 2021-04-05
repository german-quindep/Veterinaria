module.exports = {
  SecretJWT: process.env.SecretJWT || "SECRECT_TOKENS_ID",
  PORT: process.env.PORT || 3000,
  HOST_BD: process.env.HOST_BD || 'localhost',
  User_BD: process.env.User_BD || 'root',
  Password_BD: process.env.Password_BD || '',
  Database: process.env.Database || 'veterinaria',
  Port_BD: process.env.Port_BD || 3306
};
