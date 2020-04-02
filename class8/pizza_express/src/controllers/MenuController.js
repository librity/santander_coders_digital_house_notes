import Cardapio from '../models/Cardapio';

export default class cardapioController {
  listarCardapio(req, res) {
    const listaDePizza = Cardapio.listarCardapio();

    res.render('cardapio', {
      cardapio: listaDePizza,
    });
  }

  viewFormCadastro(req, res) {
    res.render('cadastroPizza');
  }

  criarPizza(req, res) {
    Cardapio.cadastrarPizza(req.body.nomePizza, req.body.precoPizza);

    return res.redirect('/cardapio/ver');
  }

  deletePizza(req, res) {
    Cardapio.destroyPizza(req.body.id);

    return res.redirect('/cardapio/ver');
  }
}
