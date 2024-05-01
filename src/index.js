// Configure the environment variables
const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });

// Import the app and routers
const app = require("./app.js");
const routerV1 = require("./routes/router.v1");
const viewsRouter = require("./routes/views.router");
// Import the database connection
const connectDB = require("./config/dbconnection");

// Set the port
const PORT = process.env.PORT || 8000;

// Set the routes
app.use("/v1", routerV1);
app.use("/", viewsRouter);

// Start the server
const startServer = async () => {
	try {
		await connectDB();
		const server = app.listen(PORT, () => {
			console.log(`Server running at http://localhost:${PORT}`);
		});

		// Handle the unhandled promise rejections
		process.on("SIGINT", () => {
			console.log("Received SIGINT. Shutting down gracefully...");
			server.close(() => {
				console.log("Server has shut down");
				process.exit(0);
			});
		});

		// Handle the unhandled promise rejections
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

// Export and execute the server
module.exports = startServer();
