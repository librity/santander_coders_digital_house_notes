import Pizza from '../models/Pizza';

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
    const [pizzaThumbnail] = req.files;

    new Pizza(name, price, pizzaThumbnail.filename);

    return res.redirect('/pizzas');
  }

  deletePizza(req, res) {
    const { id } = req.params;

    Pizza.destroy(id);

    return res.redirect('/pizzas');
  }
}

export default new PizzasController();
