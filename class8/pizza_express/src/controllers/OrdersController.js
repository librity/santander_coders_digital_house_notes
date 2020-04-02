export default class pedidoController {
  viewFormPedido(req, res) {
    res.render('criarPedido');
  }

  criarPedido(req, res) {
    res.render('sucessPedido', req.query);
  }
}
