const express = require("express");
const app = express();

app.get("/", (res, req) => {
  req.send("Hello World!");
});
app.listen(4000, console.log("GAPP is listening on port 4000."));
