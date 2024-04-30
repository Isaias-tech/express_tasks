const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");

const express = require("express");
const { join } = require("node:path");
const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.set("view engine", "ejs");
app.use(express.static(join(__dirname, "..", "views", "static")));

module.exports = app;
