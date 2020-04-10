const express = require("express");

const staticRoutes = require("./routes/staticRoutes");
const pizzaRoutes = require("./routes/pizzaRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

app.use("/", staticRoutes);
app.use("/pizzas", pizzaRoutes);
app.use("/orders", orderRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
