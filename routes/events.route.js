const express = require("express");
const events = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const eventController = require("../controllers/eventController");

// events.use("/", passport.authenticate("jwt", { session: false }));

events.route("/").get(eventController.displayAllEvents);

events.route("/").post(eventController.addEvent);

events.route("/:id").get(async (req, res) => {
  const id = req.params.id;
  const event = data.find((event) => event.id == id);
  res.status(200).json(event);
});

events.route("/approve/:id").post(async (req, res) => {
  const id = req.params.id;
  const event = data.find((event) => event.id == id);
  event.isApproved = true;
  data[id - 1] = event;
  res.status(200).json(event);
});
events.route("/reject/:id").post(async (req, res) => {
  const id = req.params.id;
  const event = data.find((event) => event.id == id);
  event.isApproved = false;
  data[id - 1] = event;
  res.status(200).json(event);
});

module.exports = events;
