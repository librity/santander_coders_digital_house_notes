import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const db = join('data', 'pizzas.json');

class Pizza {
  constructor(name, price, thumbnail) {
    const rawPizzas = readFileSync(db, { encoding: 'utf-8' });

    const empty = rawPizzas == '' || rawPizzas == '[]';

    const pizzas = empty ? [] : JSON.parse(rawPizzas);

    this.id = empty ? 1 : pizzas[pizzas.length - 1].id + 1;
    this.name = name;
    this.price = price;
    this.thumbnail = thumbnail;

    const newPizza = {
      id: this.id,
      name: this.name,
      price: this.price,
      thumbnail: this.thumbnail,
    };

    pizzas.push(newPizza);

    writeFileSync(db, JSON.stringify(pizzas));

    return newPizza;
  }

  destroy() {
    return deletePizza(this.id);
  }

  static all() {
    const rawPizzas = readFileSync(db, { encoding: 'utf-8' });

    const empty = rawPizzas == '' || rawPizzas == '[]';
    if (empty) return undefined;

    const pizzas = JSON.parse(rawPizzas);

    return pizzas;
  }

  static destroy(id) {
    return Pizza.deletePizza(id);
  }

  static deletePizza(id) {
    const rawPizzas = readFileSync(db, { encoding: 'utf-8' });

    const empty = rawPizzas == '' || rawPizzas == '[]';
    if (empty) return undefined;

    const pizzas = JSON.parse(rawPizzas);

    const newPizzas = pizzas.filter((pizza) => pizza.id != id);

    writeFileSync(db, JSON.stringify(newPizzas));

    return true;
  }
}

export default Pizza;
