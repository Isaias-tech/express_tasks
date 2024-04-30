const tasksRouter = require("express").Router();
const tasksController = require("../controllers/tasks.controllers.js");

tasksRouter.post("/", tasksController.createTask);
tasksRouter.get("/", tasksController.getAllTasks);
tasksRouter.get("/:id", tasksController.getTaskById);
tasksRouter.put("/:id", tasksController.updateTask);
tasksRouter.delete("/:id", tasksController.deleteTask);

module.exports = tasksRouter;