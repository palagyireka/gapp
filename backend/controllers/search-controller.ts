import express from "express";
import Plant from "../models/Plant";

// Controller function to handle search
const searchController = async (
  q: string,
  f: string | undefined,
  res: express.Response
) => {
  try {
    const plants = await Plant.find({
      name: { $regex: q, $options: "i" },
      category: { $regex: f, $options: "i" },
    });
    return plants;
  } catch (e) {
    console.error("Error in searchController:", e);
    res.status(500).json({ error: "Failed to search for plants" });
  }
};

export default searchController;
