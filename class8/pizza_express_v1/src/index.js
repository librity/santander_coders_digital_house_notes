const express = require("express");
const path = require("path");

let rotasUsuario = require("./routes/usuarioRoute");
let rotasCardapio = require("./routes/cardapioRoute");

let app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  const name = "Luisito";
  const { query } = req;

  res.render("index", {
    title: "PizzaExpress | Home",
    test: name,
    query,
    products: ["product1", "product2", "product3"]
  });
});
app.use("/usuarios", rotasUsuario);
app.use("/cardapio", rotasCardapio);

app.listen(3000, () => console.log("Servidor rodando perfeitamente"));
