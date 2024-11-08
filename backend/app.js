const express = require("express");
require("dotenv").config();
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const user = process.env.MONGODB_USER;
const passwrd = process.env.MONGODB_PASSWORD;
const uri = `mongodb+srv://${user}:${passwrd}@gapp.tjva1.mongodb.net/?retryWrites=true&w=majority&appName=GAPP`;
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db("gapp");
    const plants = database.collection("plants");
    const query = { name: "Dinnyekaktusz" };
    const kaktusz = await plants.findOne(query);
    console.log(kaktusz);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// const apiRoutes = require("./routes/api");
// const authRoutes = require("./routes/auth");
// const websiteRoutes = require("./routes/website");

// app.use("/", websiteRoutes);
// app.use("/api", apiRoutes);
// app.use("/auth", authRoutes);

app.listen(4000, console.log("GAPP is listening on port 4000."));
