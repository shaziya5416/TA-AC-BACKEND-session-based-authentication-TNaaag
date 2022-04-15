let express = require("express");

let router = express.Router();

router.get("/", (req, res, next) => {
  res.render("register");
});
//new registration details
router.post("/register", (req, res, next) => {
  Admin.create(req.body, (err, admin) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});
module.exports = router;