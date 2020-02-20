const Pizzas = require("../database/pizzas.json");

class StaticController {
  show(req, res) {
    const { name } = req.query;

    const pizzas = name ? filterPizzasByName(name) : Pizzas;

    const response = generatePizzaList(pizzas);

    return res.send(response);
  }
}

const filterPizzasByName = query => {
  return Pizzas.filter(pizza => pizza.nome.includes(query));
};

const generatePizzaList = pizzas => {
  let body = "";

  pizzas.forEach(pizza => {
    body += `${pizza.nome}<br />`;

    body += "Ingredientes: ";

    pizza.ingredientes.forEach((ingredient, index, array) => {
      if (index + 1 === array.length) return (body += ingredient);

      body += `${ingredient}, `;
    });

    body += "<br /><br />";
  });

  return body;
};

module.exports = new StaticController();
