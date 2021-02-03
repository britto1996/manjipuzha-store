const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var colors = require("colors");
const mongoose = require("mongoose");
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost/btm-online-store", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB CONNECTED"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
