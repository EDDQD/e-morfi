const express = require("express");
const productRoutes = express.Router();
const productController = require("../controllers/productController.js")

productRoutes.get("/detail/:id", productController.detail);
//Creo ruta para crear producto
productRoutes.get("/create", productController.formNew);
productRoutes.post("/create", productController.store);

// Update
productRoutes.get('/:id/edit', productController.edit);
productRoutes.put('/:id', productController.update);

module.exports = productRoutes; 

