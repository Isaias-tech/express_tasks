const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });

const app = require("./app.js");

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.status(200).send({ message: "The app is up and running." });
});

const server = app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
