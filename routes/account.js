const express = require("express");
const accountRoutes = express.Router();
const accountController = require("../controllers/accountController.js")

accountRoutes.get("/login", accountController.login);
accountRoutes.get("/register", accountController.register);

module.exports = accountRoutes;