// Import the required modules
const compression = require("compression");
const { join } = require("node:path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Create the express app
const app = express();

// Configure the app
app.use(morgan("dev"));
app.use(express.json());
app.use(compression());
app.use(cors());

// Set the view engine and static folder
app.set("view engine", "ejs");
app.set("views", join(__dirname, "views", "pages"));
app.use(express.static(join(__dirname, "views", "static")));

// Export the app
module.exports = app;
