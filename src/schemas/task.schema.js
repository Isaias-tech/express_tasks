const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
	tags: {
		type: [mongoose.Schema.Types.ObjectId],
		ref: "tags",
		required: false,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "users",
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	checklist: {
		type: [String],
		required: false,
		default: [],
	},
	dueDate: {
		type: Date,
		required: true,
	},
	priority: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		immutable: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	status: {
		type: String,
		required: true,
		enum: ["active", "archived"],
		default: "active",
	},
}, { timestamps: true, collection: "tasks" });

module.exports = mongoose.model("tasks", taskSchema);
