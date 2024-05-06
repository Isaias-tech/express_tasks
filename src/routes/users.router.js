const usersRouter = require("express").Router();
const usersController = require("../controllers/users.controllers.js");

usersRouter.get("/", usersController.getAllUsers);
usersRouter.get("/:id", usersController.getUserById);
usersRouter.post("/signIn", usersController.signIn);
usersRouter.post("/", usersController.createUser);
usersRouter.put("/:id", usersController.updateUser);
usersRouter.delete("/:id", usersController.deleteUser);

module.exports = usersRouter;