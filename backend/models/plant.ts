import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
  {
    category: String,
    subcategory: String,
    group: String,
    name: String,
    url: String,
    desc: String,
    sci_name: String,
  },
  { collection: "plants" }
);

export default mongoose.model("Plant", PlantSchema);
