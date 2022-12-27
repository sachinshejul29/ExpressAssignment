const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.post("/home", (req, res, next) => {
  const parsedCredentials = JSON.parse(
    fs.readFileSync("credentials.json").toString()
  );
  // login validation
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

module.exports = router;
