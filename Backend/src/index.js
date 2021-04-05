const app = require("./app");
const config = require("./config.js");
const init = async () => {
  await app.listen(config.PORT);
  console.log(`Server on Port ${config.PORT}`);
};
init();
