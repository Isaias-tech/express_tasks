const morgan = require("morgan");
const cors = require("cors");
const compression = require("compression");

const express = require("express");
const app = express();

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

module.exports = app;
