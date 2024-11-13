import mongoose from "mongoose";

/**
 * @file plant.ts
 * @description Mongoose modell az adatbázisban tárolt növényekről
 */

const PlantSchema = new mongoose.Schema(
  {
    category: String,
    subcategory: String,
    group: String,
    name: String,
    url: String,
    desc: String,
    sci_name: String,
    img_src_array: [String],
  },
  { collection: "plants" }
);

export default mongoose.model("Plant", PlantSchema);
