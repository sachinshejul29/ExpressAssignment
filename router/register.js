const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

// function to load all users from credential file
const loadUsers = () => {
  try {
    const dataBuffer = fs.readFileSync("credentials.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

// const to store all users from credential file
const users = loadUsers();

router.get("/register", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "register.html"));
});

router.post("/register", (req, res, next) => {
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

module.exports = router;
