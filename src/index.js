const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/../.env` });

const app = require("./app.js");
const routerV1 = require("./routes/router.v1");

const PORT = process.env.PORT || 8000;

app.use("/v1", routerV1);

const server = app.listen(PORT, () => {
	console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = server;
