const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();
const user = require("./routes/user");
const product = require("./routes/product");
const order = require("./routes/order");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const port = process.env.PORT || 8000;

app.use(cookieParser());

app.use(cors());

app.use(morgan("dev"));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/products", product);
app.use("/api/orders", order);
app.use("/api/users", user);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
