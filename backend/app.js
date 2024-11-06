const express = require("express");
const app = express();

const apiRoutes = require("@routes/api");
const authRoutes = require("@routes/auth");
const websiteRoutes = require("@routes/website");

app.use("/", websiteRoutes);
app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

app.listen(4000, console.log("GAPP is listening on port 4000."));
