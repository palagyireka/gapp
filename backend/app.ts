import express from "express";
import dotenv from "dotenv"; // Import dotenv
import mongoose from "mongoose";
import cors from "cors";

import apiRoutes from "@routes/api";
import websiteRoutes from "@routes/website";

// Load environment variables
dotenv.config();

const app = express();
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use(cors({ origin: "http://localhost:5173" }));
app.use("/", websiteRoutes);
app.use("/api", apiRoutes);

app.listen(4000, () => {
  console.log("GAPP is listening on port 4000.");
});
