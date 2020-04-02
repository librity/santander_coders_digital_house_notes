class OrdersController {
  neW(req, res) {
    res.render('orders/new');
  }

  create(req, res) {
    res.render('orders/success', req.query);
  }
}

export default new OrdersController();
