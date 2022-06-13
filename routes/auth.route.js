const express = require("express");
const auth = express.Router();
const jwt = require("jsonwebtoken");
const userController = require("../controllers/userController");


auth.route("/login").post(userController.login);
auth.route("/update/:id").put(userController.update);

module.exports = auth;
