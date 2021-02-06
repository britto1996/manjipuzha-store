const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();
const user = require("./routes/user");
const morgan = require("morgan");
const port = process.env.PORT || 8000;

app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/users", user);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
