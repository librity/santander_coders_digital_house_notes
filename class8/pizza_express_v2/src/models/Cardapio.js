const fs = require("fs");
const path = require("path");

const db = path.join("cardapio.json");

function listarCardapio() {
  const cardapioRaw = fs.readFileSync(db, { encoding: "utf-8" });
  const cardapio = JSON.parse(cardapioRaw);

  return cardapio;
}

function cadastrarPizza(nome, preco) {
  const cardapioRaw = fs.readFileSync(db, { encoding: "utf-8" });
  const cardapio = JSON.parse(cardapioRaw);

  cardapio.push({ nome, preco });

  return fs.writeFileSync(db, JSON.stringify(cardapio));
}

module.exports = { listarCardapio, cadastrarPizza };
