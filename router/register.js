const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");

router.get("/register", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "register.html"));
});

router.post("/register", (req, res, next) => {
  fs.writeFileSync("credentials.json", JSON.stringify(req.body));
  res.redirect("/");
});

module.exports = router;
