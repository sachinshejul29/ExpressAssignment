const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.post("/home", (req, res, next) => {
  // const to store all the users from credential file
  const loadUsers = JSON.parse(fs.readFileSync("credentials.json").toString());

  if (
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

module.exports = router;
