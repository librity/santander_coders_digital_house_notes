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
