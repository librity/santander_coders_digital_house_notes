import fs from 'fs';
import path from 'path';

const db = path.join('cardapio.json');

function listarCardapio() {
  const cardapioRaw = fs.readFileSync(db, { encoding: 'utf-8' });

  const empty = cardapioRaw == '' || cardapioRaw == '[]';
  if (empty) {
    return undefined;
  }

  return JSON.parse(cardapioRaw);
}

function cadastrarPizza(nome, preco) {
  const cardapioRaw = fs.readFileSync(db, { encoding: 'utf-8' });

  const empty = cardapioRaw == '' || cardapioRaw == '[]';

  const cardapio = empty ? [] : JSON.parse(cardapioRaw);

  const id = empty ? 1 : cardapio[cardapio.length - 1].id + 1;

  cardapio.push({ id, nome, preco });

  fs.writeFileSync(db, JSON.stringify(cardapio));

  return cardapio;
}

function destroyPizza(id) {
  const cardapioRaw = fs.readFileSync(db, { encoding: 'utf-8' });

  const empty = cardapioRaw == '' || cardapioRaw == '[]';
  if (empty) {
    return undefined;
  }

  const cardapio = JSON.parse(cardapioRaw);

  const newCardapio = cardapio.filter((pizza) => pizza.id != id);

  fs.writeFileSync(db, JSON.stringify(newCardapio));

  return cardapio;
}

module.exports = { listarCardapio, cadastrarPizza, destroyPizza };
