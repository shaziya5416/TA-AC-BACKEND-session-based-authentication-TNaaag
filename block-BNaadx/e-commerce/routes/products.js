let express = require("express");
let Admin = require("../models/admin");
let User = require("../models/user");
let Product = require("../models/product");
let Comment = require("../models/comment");
let router = express.Router();
//page for creating product
router.get("/new", (req, res, next) => {
  res.render("createProduct");
});
//create product with details and save it in DB
router.post("/", (req, res, next) => {
  Product.create(req.body, (err, product) => {
    if (err) {
      return next(err);
    }
    res.redirect("/products");
  });
});
//render all products
router.get("/", (req, res, next) => {
  Product.find({}, (err, products) => {
    if (err) {
      return next(err);
    }
    res.render("products", { products: products });
  });
});
//edit product
router.get("/:id/edit", (req, res, next) => {
  var id = req.params.id;
  Product.findById(id, (err, product) => {
    if (err) return next(err);
    res.render("editProduct", { product });
  });
});
//for edited product
router.post("/:id", (req, res, next) => {
  var id = req.params.id;
  Product.findByIdAndUpdate(id, req.body, (err, updatedproduct) => {
    if (err) return next(err);
    console.log(updatedproduct);
    res.redirect("/products/" + id);
  });
});
module.exports = router;