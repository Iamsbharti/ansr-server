const express = require("express");
const dotenv = require("dotenv");
const router = require("./router/router");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const { intializeDb } = require("./db");
const app = express();
dotenv.config();

intializeDb();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Content-Disposition"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});

let baseUrl = process.env.BASE_URL;
app.use(baseUrl, router);
console.log(process.env.DB_CONNECT);
const port = process.env.PORT;
app.listen(port, () => console.log("ANSR_SERVER Running at :", port));

module.exports = app;
