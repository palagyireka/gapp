const express = require("express");
const gapp = express.Router();

gapp.get("/aut", (req, res) => {
  res.send("Welcome to the authentication!");
});
