const express = require("express");
const path = require("path");
const expressApp = express();
const bodyParser = require("body-parser");

expressApp.use(bodyParser.urlencoded({ extended: true }));

const registerRouter = require("./router/register");
const loginRouter = require("./router/login");
const homeRouter = require("./router/home");
expressApp.use(registerRouter);
expressApp.use(loginRouter);
expressApp.use(homeRouter);

expressApp.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

expressApp.listen(3000);
