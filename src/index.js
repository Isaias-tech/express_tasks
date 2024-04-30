const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });

const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {});
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Database connection error", error);
		process.exit(1);
	}
};

const app = require("./app.js");
const routerV1 = require("./routes/router.v1");

const PORT = process.env.PORT || 8000;

app.use("/v1", routerV1);
app.get("/", (req, res) => {
	res.render("index");
});
app.get("/sign-in", (req, res) => {
	res.render("sign-in");
});
app.get("/sign-up", (req, res) => {
	res.render("sign-up");
});
app.get("/tasks", (req, res) => {
	res.render("tasks");
});

const startServer = async () => {
	try {
		await connectDB();
		const server = app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});

		process.on("SIGINT", () => {
			console.log("Received SIGINT. Shutting down gracefully...");
			server.close(() => {
				console.log("Server has shut down");
				process.exit(0);
			});
		});

		process.on("SIGTERM", () => {
			console.log("Received SIGTERM. Shutting down gracefully...");
			server.close(() => {
				console.log("Server has shut down");
				process.exit(0);
			});
		});

		module.exports = server;
	} catch (error) {
		console.error("Error starting server", error);
		process.exit(1);
	}
};

startServer();
