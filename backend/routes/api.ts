import express, { Request, Response } from "express";
import searchController from "@controllers/search-controller";
import randomPlant from "@controllers/randomplant";

const gapp = express.Router();

gapp.get("/", (req, res) => {
  res.send("Welcome to the api!");
});

gapp.get("/search", async (req, res) => {
  try {
    const { q, f } = req.query;
    let filter = "";
    if (f) {
      filter = String(f);
    }
    if (q) {
      const result = await searchController(String(q), filter, res);
      res.json(result);
    } else {
      res.send("Error! Undefined search keyword.");
    }
  } catch (e) {
    console.log("Error trying: ", e);
  }
});

gapp.get("/random", async (req, res) => {
  try {
    const result = await randomPlant(res);
    res.json(result);
  } catch (e) {
    console.log("Error trying to get random plant:", e);
  }
});

export default gapp;
