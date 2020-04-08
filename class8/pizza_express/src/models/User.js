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

  static findByEmail(email) {
    const rawUsers = readFileSync(db, { encoding: 'utf-8' });

    const empty = rawUsers == '' || rawUsers == '[]';

    if (empty) return null;

    const users = JSON.parse(rawUsers);

    let [user] = users.filter((user, index) => {
      return user.email === email;
    });

    return user;
  }
}

export default User;
