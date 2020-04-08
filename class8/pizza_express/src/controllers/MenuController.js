import Pizza from '../models/Pizza';

class MenuController {
  index(req, res) {
    const pizzas = Pizza.all();

    res.render('menu', { pizzas });
  }
}

export default new MenuController();
