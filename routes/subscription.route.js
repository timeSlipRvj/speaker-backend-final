const express = require("express");
const subscription = express.Router();

const plans = [
  {
    id: 1,
    name: "Golden",
    duration: 11,
    price: 1000,
    disable: true,
    features: "This is a golden feature 1,This is a golden feature 2",
  },
  {
    id: 2,
    name: "Start Up",
    duration: 3,
    price: 2000,
    disable: true,
    features: "This is a Start feature 1,This is a Start feature 2",
  },
];

subscription.route("/").get(async (req, res) => {
  res.status(200).json(plans);
});

module.exports = subscription;
