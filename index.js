const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

const registerRouter = require("./router/register");
const loginRouter = require("./router/login");
const homeRouter = require("./router/home");

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: true }));
expressApp.use(multer().array());
expressApp.use(express.static("public"));

expressApp.use(registerRouter);
expressApp.use(loginRouter);
expressApp.use(homeRouter);

expressApp.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

expressApp.listen(3000);
