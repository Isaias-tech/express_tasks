const viewsRouter = require("express").Router();

viewsRouter.get("/", (req, res) => {
	res.render("home");
});
viewsRouter.get("/sign-in", (req, res) => {
	res.render("sign-in");
});
viewsRouter.get("/sign-up", (req, res) => {
	res.render("sign-up");
});
viewsRouter.get("/tasks", (req, res) => {
	res.render("tasks");
});

module.exports = viewsRouter;
