import express from "express";
import Plant from "../models/Plant";

// Controller function to handle search
const randomPlant = async (res: express.Response) => {
  try {
    const plant = await Plant.aggregate([{ $sample: { size: 1 } }]);
    if (!plant) {
      return res.status(404).json({ error: "No plant found in database." });
    }
    const onePlant = plant[0];

    return onePlant;
  } catch (e) {
    console.error("Error in randomPlant:", e);
    res
      .status(500)
      .json({ error: "Failed to search for plant in randomPlant" });
  }
};

export default randomPlant;
