var express = require('express');
var router = express.Router();
var User = require("../models/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users")
});

/*get request on register*/
router.get("/register",function(req,res,next){
  res.render("register");
})
/*post request on register*/
router.post("/register",function(req,res,next){
  User.create(req.body,(err,user)=>{
    console.log(user);
    if(err) return next(err);
    res.redirect("/users/login")
  })
})
/*get request on login */ 
router.get("/login", function (req, res, next) {
  res.render("login");
});
module.exports = router;
