import express from "express";
import path from "path";
import bodyParser from "body-parser";
import registerRouter from "../src/router/register";
import loginRouter from "../src/router/login";
import homeRouter from "../src/router/home";

// const to store express application
const expressApp = express();

expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use(registerRouter);
expressApp.use(loginRouter);
expressApp.use(homeRouter);

expressApp.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "error404.html"));
});

// setting up the port
expressApp.listen(3000);
