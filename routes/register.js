const express = require("express");
const registerRoutes = express.Router();
const registerController = require("../controllers/registerController.js")

registerRoutes.get("/", registerController.index);

module.exports = registerRoutes;