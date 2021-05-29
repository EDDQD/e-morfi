const express = require("express");
const loginRoutes = express.Router();
const loginController = require("../controllers/loginController.js")

loginRoutes.get("/", loginController.index);

module.exports = loginRoutes;