const path = require("path");
const express = require("express");
const app = express();
var controller = require("./controller");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", () => {
  console.log("Application listening on port 3333!");
});

app.get("/blurry", controller.getBlurry);

app.listen(3333, () => {
  console.log("Application listening on port 3333!");
});
