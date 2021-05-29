const express = require("express");
const cartRoutes = express.Router();
const cartController = require("../controllers/cartController.js")

cartRoutes.get("/", cartController.index);

module.exports = cartRoutes;