const express = require("express");
const gapp = express.Router();

gapp.get("/", (req, res) => {
  res.send("Welcome to the homepage!");
});