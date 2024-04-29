const User = require("../models/user.schema.js");

const createUser = async (req, res) => {
	try {
		const { userName, name, lastName, email, password } = req.body;
		const newUser = new User({ userName, name, lastName, email, password });
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getAllUsers = async (req, res) => {
	try {
		const users = await User.find({ status: { $ne: "deleted" } }, { password: 0, "__v": 0 }, { lean: true });
		res.status(200).json({ users });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const getUserById = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id, { password: 0, "__v": 0 }, { lean: true });
		if (!user) {
			res.status(404).json({ error: "User not found" });
			return;
		}
		res.status(200).json({ user });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(id, req.body, { new: true });
		console.log(user);
		if (!user) {
			res.status(404).json({ error: "User not found" });
			return;
		}
		res.status(200).json({ user });
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(id, { status: "deleted" }, {});
		if (!user) {
			res.status(404).json({ error: "User not found" });
		}
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };