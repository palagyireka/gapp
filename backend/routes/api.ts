import express, { Request, Response } from "express";
import searchController from "@controllers/search-controller";

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
  if (!res.headersSent) {
    // Ensure no additional response is sent after headers are sent
    res.status(500).json({ error: "Internal server error" });
  }
});

export default gapp;
