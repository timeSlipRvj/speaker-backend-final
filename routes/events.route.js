const express = require("express");
const events = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const eventController = require("../controllers/eventController");

// events.use("/", passport.authenticate("jwt", { session: false }));

events.route("/").get(eventController.displayAllEvents);

events.route("/").post(eventController.addEvent);

events.route("/:id").get(eventController.getEventById);

events.route("/approve/:id").post(eventController.approve);
events.route("/reject/:id").post(eventController.reject);

module.exports = events;
