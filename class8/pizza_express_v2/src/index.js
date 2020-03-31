const express = require("express");
const path = require("path");
const cors = require("cors");

const rotasUsuario = require("./routes/usuarioRoute");
const rotasCardapio = require("./routes/cardapioRoute");
const rotasPedido = require("./routes/pedidoRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.static(path.join("/public")));

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  const { nome } = req.query;

  res.render("admin/index", {
    produtos: ["produtos1", "produtos2", "produtos3", "produtos4"],
    teste: nome
  });
});

app.use("/usuarios", rotasUsuario);
app.use("/cardapio", rotasCardapio);
app.use("/pedido", rotasPedido);

app.listen(3000, () =>
  console.log("Servidor rodando perfeitamente", path.join("/public"))
);
