const tagsRouter = require("express").Router();
const tagsController = require("../controllers/tags.controllers.js");

tagsRouter.post("/", tagsController.createTag);
tagsRouter.get("/", tagsController.getAllTags);
tagsRouter.get("/:id", tagsController.getTagById);
tagsRouter.put("/:id", tagsController.updateTag);
tagsRouter.delete("/:id", tagsController.deleteTag);

module.exports = tagsRouter;