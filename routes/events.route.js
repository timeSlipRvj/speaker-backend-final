const express = require("express");
const events = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

events.use("/", passport.authenticate("jwt", { session: false }));

events.route("/").get(async (req, res) => {
  res.status(200).json(data);
});

events.route("/").post(async (req, res) => {
  const newEvent = {
    id: data.length + 1,
    name: req.body.name,
    street: req.body.street,
    state: req.body.state,
    country: req.body.country,
    start_time: req.body.start_time,
    end_time: req.body.end_time,
    email: req.body.email,
    about: req.body.about,
    city: req.body.city,
    postalCode: req.body.postalCode,
    website: req.body.website,
    mode: req.body.mode,
    topic: req.body.topic,
    location: req.body.location,
    paymentTerm: req.body.paymentTerm,
    eventIncludes: req.body.eventIncludes,
    contact: req.body.contact,
    sessionType: req.body.sessionType,
    AudienceType: req.body.AudienceType,
    tags: req.body.tags,
    description: req.body.description,
    categories: req.body.categories,
    isApproved: false,
  };
  data.push(newEvent);
  res.status(200).json(newEvent);
});

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
