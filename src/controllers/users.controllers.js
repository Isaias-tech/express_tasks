const User = require("../schemas/user.schema.js");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
	try {
		const newUser = new User(req.body);
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

const signIn = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const user = await User.findOne({ userName, password, status: { $ne: "deleted" } }, {
			password: 0,
			"__v": 0,
		}, { lean: true });
		if (!user) {
			res.status(404).json({ error: "User not found" });
			return;
		}
		delete user.password;
		delete user.status;
		delete user.createdAt;
		delete user.updatedAt;

		jwt.sign(user, process.env.SECRET_JWT_KEY, { expiresIn: "15m" }, (err, token) => {
			if (err) {
				res.status(500).json({ error: err.message });
				return;
			}
			res.cookie("token", token, { httpOnly: true });
			res.json({ ...user });
			res.redirect("/tasks");
		});
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findByIdAndUpdate(id, req.body, { new: true });
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
		const user = await User.findByIdAndUpdate(id, { status: "deleted" }, { new: true });
		if (!user) {
			res.status(404).json({ error: "User not found" });
			return;
		}
		res.status(204).json();
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

module.exports = { createUser, getAllUsers, getUserById, signIn, updateUser, deleteUser };