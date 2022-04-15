let express = require("express");
let Admin = require("../models/admin");
let User = require("../models/user");
let Comment = require("../models/comment");
let router = express.Router();

router.get("/register", (req, res, next) => {
  res.render("userRegister");
});
router.get("/login", (req, res, next) => {
  res.render("userLogin");
});
module.exports = router;
