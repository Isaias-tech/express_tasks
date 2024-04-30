const Tag = require("../schemas/tag.schema.js");

const createTag = async (req, res) => {
	try {
		const { name, color } = req.body;
		const tag = new Tag({ name, color });
		await tag.save();
		res.status(201).json(tag);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getAllTags = async (req, res) => {
	try {
		const tags = await Tag.find();
		res.status(200).json(tags);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getTagById = async (req, res) => {
	try {
		const { id } = req.params;
		const tag = await Tag.findById(id, {}, { lean: true });
		if (!tag) {
			res.status(404).json({ error: "Tag not found" });
			return;
		}
		res.status(200).json(tag);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateTag = async (req, res) => {
	try {
		const { id } = req.params;
		const tag = await Tag.findByIdAndUpdate(id, req.body, { new: true });
		if (!tag) {
			res.status(404).json({ error: "Tag not found" });
			return;
		}
		res.status(200).json(tag);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteTag = async (req, res) => {
	try {
		const { id } = req.params;
		const tag = await Tag.findByIdAndDelete(id);
		if (!tag) {
			res.status(404).json({ error: "Tag not found" });
			return;
		}
		res.status(200).json(tag);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { createTag, getAllTags, getTagById, updateTag, deleteTag };