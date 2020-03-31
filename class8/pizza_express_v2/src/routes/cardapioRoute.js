const {Router} = require("express");
const cardapioController = require("../controllers/cardapioController");


const route = Router();

route.get("/cadastrar/:pizza/:preco", (req, res) => {
  res.send("Cadastrou pizza com sucesso!");
});

route.get("/ver", cardapioController.listarCardapio);
route.get("/cadastro", cardapioController.viewFormCadastro);

route.post("/cadastro", cardapioController.criarPizza);

route.post("/delete", cardapioController.deletePizza);

module.exports = route;
