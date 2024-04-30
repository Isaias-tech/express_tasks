const Task = require("../schemas/task.schema.js");

const createTask = async (req, res) => {
	try {
		const task = new Task(req.body);
		await task.save();
		res.status(201).send(task);
	} catch (error) {
		res.status(400).send;
	}
};

const getAllTasks = async (req, res) => {
	try {
		const tasks = await Task.find();
		res.status(200).send(tasks);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getTaskById = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findById(id, {}, { lean: true });
		if (!task) {
			res.status(404).json({ error: "Task not found" });
			return;
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
		if (!task) {
			res.status(404).json({ error: "Task not found" });
			return;
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteTask = async (req, res) => {
	try {
		const { id } = req.params;
		const task = await Task.findByIdAndDelete(id);
		if (!task) {
			res.status(404).json({ error: "Task not found" });
			return;
		}
		res.status(200).json(task);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };