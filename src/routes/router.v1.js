const { Router } = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../config/swagger.v1.config.json");
const usersRouter = require("./users.router.js");
const tagsRouter = require("./tags.router.js");
const tasksRouter = require("./tasks.router.js");

const routerV1 = Router();

routerV1.use("/users", usersRouter);
routerV1.use("/tags", tagsRouter);
routerV1.use("/tasks", tasksRouter);
routerV1.use("/docs", swaggerUi.serve);
routerV1.get("/docs", swaggerUi.setup(swaggerDocument));

module.exports = routerV1;