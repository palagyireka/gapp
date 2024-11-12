import mongoose from "mongoose";

const PlantSchema = new mongoose.Schema(
  {
    category: String,
    subcategory: String,
    name: String,
    sci_name: String,
    url: String,
    desc: String,
    img_url: String,
  },
  { collection: "plants" }
);

export default mongoose.model("Plant", PlantSchema);
