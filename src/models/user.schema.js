const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	userName: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
		onupdate: Date.now,
	},
	createAt: {
		type: Date,
		default: Date.now,
		immutable: true,
	},
	status: {
		type: String,
		enum: ["active", "inactive", "deleted"],
		default: "active",
	},
});

userSchema.method.remove = function() {
	throw new Error("Remove function has been disabled for this schema");
};

module.exports = mongoose.model("User", userSchema);