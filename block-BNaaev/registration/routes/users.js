var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*get request on register*/
router.get("/register",function(req,res,next){
  res.render("users");
})
/*post request on register*/
router.post("/register",function(req,res,next){
  User.create(req.body,(err,user)=>{
    if(err) return next(err);
    res.redirect("/users/login")
  })
})
/*get request on login */ 
router.get("/login", function (req, res, next) {
  res.render("login");
});
module.exports = router;
