const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	color: {
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
}, { timestamps: true, collection: "tags" });

module.exports = mongoose.model("Tag", tagSchema);
