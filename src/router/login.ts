import express from "express";
import path from "path";

// const to store router options
const loginRouter = express.Router();

// setting up the get/fetch request
loginRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

export = loginRouter;
