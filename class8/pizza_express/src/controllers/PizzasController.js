import Pizza from '../Models/Pizza';

class PizzasController {
  index(req, res) {
    const pizzas = Pizza.all();

    return res.render('pizzas', { pizzas });
  }

  neW(req, res) {
    res.render('pizzas/new');
  }

  create(req, res) {
    const { name, price } = req.body;

    new Pizza(name, price);

    return res.redirect('/menu');
  }

  deletePizza(req, res) {
    const { id } = req.body;

    Pizza.destroy(id);

    return res.redirect('/menu');
  }
}

export default new PizzasController();
