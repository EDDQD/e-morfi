const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController.js")

productRoutes.get("/", productController.index);

module.exports = productRoutes;