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
const homeRouter = express.Router();

// setting up the post/write request
homeRouter.post("/home", (req, res, next) => {
  // const to store all the users from credential file
  const loadUsers: User[] | undefined = JSON.parse(
    fs.readFileSync("credentials.json").toString()
  );

  if (
    loadUsers &&
    loadUsers.find(
      (user) =>
        user.email === req.body.email && user.password === req.body.password
    )
  ) {
    res.sendFile(path.join(__dirname, "../", "views", "home.html"));
    console.log("logged in");
  } else {
    res.redirect("/");
    console.log("Wrong credentials");
  }
});

export = homeRouter;
