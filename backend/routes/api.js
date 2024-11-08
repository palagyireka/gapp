const express = require("express");
const gapp = express.Router();

gapp.get("/api", (req, res) => {
  res.send("Welcome to the api!");
});
