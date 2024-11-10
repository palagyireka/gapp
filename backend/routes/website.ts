import express, { Request, Response } from "express";
const gapp = express.Router();

gapp.get("/", (req, res) => {
  res.send("Welcome to the website!");
});

export default gapp;
