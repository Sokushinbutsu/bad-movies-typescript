const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

const routes = require("./routes.ts");

app.use("/movies", routes);

app.listen(3000, () => {
  console.log("listening on port 3000!");
});
