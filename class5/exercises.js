const moduloNativo = require("http");
const moduloInstalado = require("axios");
const moduloProprio = require("./minhaFuncao");

let nome = "Scooby";
let idade = 7;
let gostaDeComer = true;

const cachorro = {
  nome: "Scooby",
  idade: 7,
  gostaDeComer: true
};

module.exports = cachorro;

const cachorro = require("./cachorro");

console.log(
  "O cachorro se chama " + cachorro.nome + " e tem " + cachorro.idade + " anos"
);

const http = require("http");

http
  .createServer((req, res) => {
    console.log("Instanciando um servidor");
  })
  .listen(3000, "localhost");

//
const express = require("express");

const router = express.Router();

//
const express = require("express");

const app = express();

app.get("/home", (req, res) => res.send("Olá, estamos na página home"));

//
const express = require("express");

const app = express();

let boasVindas = "Bem vindo/a, aqui estamos em seu perfil";

app.get("/perfil", (req, res) => res.send(boasVindas));

//
const express = require("express");
const app = express();

const produto = {
  tipoProduto: null,
  preco: null,
  quantidade: null
};

app.get("/produto/adicionar", (req, res) => res.send(produto));

//
const express = require("express");
const app = express();

let produto = {
  tipoProduto: "living",
  preco: 1245,
  quantidade: 300
};

app.post("/produto/criar", (req, res) => res.send(produto));

//
const express = require("express");
const app = express();

app.get("/series", (req, res) => res.send(series));

//
const express = require("express");
const app = express();

app.get("/serie/:id", (req, res) => {
  let { id } = req.params;

  return res.send(series[id - 1]);
});

//
const express = require("express");

const router = express.Router();

//
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {});

router.get("/:genero", (req, res) => {});

router.get("/criar", (req, res) => {});

module.exports = router;

//
const express = require("express");
const app = express();

const rotasSeries = require("./routes/series");

app.use("/series", rotasSeries);

//
let CarrinhoController = {
  removeItem: function() {},
  getItem: function() {},
  addItem: function(req, res) {
    res.send("Item Adicionado");
  }
};

module.exports = CarrinhoController;

//
let express = require("express");
let router = express.Router();
const CarrinhoController = require('../controllers/CarrinhoController');

router.get("/:item", CarrinhoController.addItem);

module.exports = router;

//
