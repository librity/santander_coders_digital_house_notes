class OrdersController {
  neW(req, res) {
    res.render('orders/new');
  }

  create(req, res) {
    const { name, address, pizzaName } = req.body;

    res.render('orders/success', { name, address, pizzaName });
  }
}

export default new OrdersController();
