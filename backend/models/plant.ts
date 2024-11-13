import mongoose from "mongoose";

/**
 * @file plant.ts
 * @description Mongoose modell az adatbázisban tárolt növényekről
 */

const PlantSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["room", "dekor", "useful", "local", "fruit", "veggie"],
      required: true,
    },
    subcategory: String,
    name: String,
    url: String,
    desc: String,
    sci_name: String,
    img_src_array: {
      type: [String],
      default: [],
    },
  },
  { collection: "plants" }
);

export default mongoose.model("Plant", PlantSchema);
