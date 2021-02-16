const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var colors = require("colors");
const connectDB = require("./config/db");
require("dotenv").config();
const user = require("./routes/user");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const product = require("./routes/product");
const order = require("./routes/order");
const upload = require("./routes/upload");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 8000;

app.use(cookieParser());

app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

connectDB();

app.use("/api/products", product);
app.use("/api/orders", order);
app.use("/api/users", user);
app.use("/api/upload", upload);

var __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
