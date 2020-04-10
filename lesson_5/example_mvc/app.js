const express = require("express");
const app = express();

const rotasSeries = require("./routes/SeriesRoutes");

app.use("/series", rotasSeries);

app.listen(3000, () => console.log("Listening on http://localhost:3000"));
