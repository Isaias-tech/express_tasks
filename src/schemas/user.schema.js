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
	profileImageUrl: {
		type: String,
		required: false,
		default: "https://res.cloudinary.com/dj0hodqpr/image/upload/v1714485007/alarufpdwxfpy6e4db3x.png",
	},
	password: {
		type: String,
		required: true,
	},
	genre: {
		type: String,
		enum: ["Male", "Female"],
		required: true,
	},
	updatedAt: {
		type: Date,
		default: Date.now,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		immutable: true,
	},
	status: {
		type: String,
		enum: ["active", "inactive", "deleted"],
		default: "active",
	},
}, { timestamps: true, collection: "users" });

userSchema.method.remove = function() {
	throw new Error("Remove function has been disabled for this schema");
};

module.exports = mongoose.model("User", userSchema);