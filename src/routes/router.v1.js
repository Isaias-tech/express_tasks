const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.v1.config.json");

const routerV1 = Router();

routerV1.use("/docs", swaggerUi.serve);
routerV1.use("/docs", swaggerUi.setup(swaggerDocument));

module.exports = routerV1;