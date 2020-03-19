const Cardapio = require("../models/Cardapio");

let cardapioController = {
  listarCardapio: (req, res) => {
    let listaDePizza = Cardapio.listarCardapio();
    res.render("cardapio", {
      title: "PizzaExpress | Cardapio",
      cardapio: listaDePizza
    });
  }
};

module.exports = cardapioController;
