let cardapio = [
  { nome: "Calamussa", preco: "R$30,00" },
  { nome: "Frango com Catupiry", preco: "R$35,00" },
  { nome: "Romanesca", preco: "R$35,00" },
  { nome: "Marguerita", preco: "R$25,00" },
  { nome: "Calabresa", preco: "R$35,00" },
  { nome: "Catupiry com Bacon", preco: "R$40,00" }
];

function listarCardapio() {
  return cardapio;
}

module.exports = { listarCardapio };
