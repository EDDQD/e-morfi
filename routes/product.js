const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController.js")

productRoutes.get("/detail", productController.detail);

module.exports = productRoutes;