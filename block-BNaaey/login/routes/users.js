var express = require('express');
var router = express.Router();
var User= require("../models/User");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("users");
});

router.get(`/register`,function(req,res,next){
  res.render("register");
});

router.post("/register", (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect("/users/login");
  });
});

router.get(`/login`,function(req,res,next){
  res.render("login");
});

router.post(`/login`,function(req,res,next){
  var{email,password}=req.body // capturing password and email
  if(!email || !password){ // if the email password does'nt exist
    res.redirect("/users/login");
  };
  User.findOne({email},(err,user)=>{
    if (err) return next(err);
    if(!user){
      return res.redirect("/users/login") // if email is not registered
    }
    user.verifyPassword(password,(err,result)=>{
      if (err) return next(err);
      if(!result){
        return res.redirect("/users/login")// if passwords dont match
      }
      req.session.userId = user.id;
      res.redirect("/users");
    })
  });
});

module.exports = router;
