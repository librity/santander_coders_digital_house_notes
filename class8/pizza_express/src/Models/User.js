import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const db = join('data', 'users.json');

class User {
  constructor(name, email, password) {
    const rawUsers = readFileSync(db, { encoding: 'utf-8' });

    const empty = rawUsers == '' || rawUsers == '[]';

    const users = empty ? [] : JSON.parse(rawUsers);

    this.id = empty ? 1 : users[users.length - 1].id + 1;
    this.name = name;
    this.email = email;
    this.password = password;

    users.push({
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
    });

    writeFileSync(db, JSON.stringify(users));

    return users;
  }
}

function cadastrarUsuario(nome, email, senha) {
  const novoUsuario = {
    nome,
    email,
    senha,
  };

  let listaDeUsuarios = JSON.parse(fs.readFileSync(db, { encoding: 'utf-8' }));

  listaDeUsuarios.push(novoUsuario);
  fs.writeFileSync(db, JSON.stringify(listaDeUsuarios));

  return true;
}

function buscarUsuario(email) {
  let listaDeUsuarios = JSON.parse(fs.readFileSync(db, { encoding: 'utf-8' }));

  let [usuario] = listaDeUsuarios.filter((usuario, index) => {
    return usuario.email == email;
  });

  return usuario;
}

export default User;
