import express from "express";
import path from "path";
import fs from "fs";

// type to store fields of User
type User = {
  // type to store email field
  email: string;
  // type to store password field
  password: string;
};

// const to store router options
const registerRouter = express.Router();

// function to load all users from credential file
const loadUsers = () => {
  try {
    // const to load buffer data from database file
    const dataBuffer = fs.readFileSync("credentials.json");
    // const to convert buffer data in readable format (to string)
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// const to store all users from credential file
const users: User[] | undefined = loadUsers();

// setting up the get/fetch request for all data
registerRouter.get("/register", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "register.html"));
});

// setting up the post/write request
registerRouter.post("/register", (req, res, next) => {
  if (!users.find((user) => user.email === req.body.email)) {
    users.push({
      email: req.body.email,
      password: req.body.password,
    });
  } else {
    console.log("Email ID already used");
  }
  fs.writeFileSync("credentials.json", JSON.stringify(users));
  res.redirect("/");
});

export = registerRouter;
