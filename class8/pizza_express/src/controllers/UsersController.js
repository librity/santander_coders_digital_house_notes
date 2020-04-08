import User from '../models/User';
import bcrypt from 'bcrypt';

class UsersController {
  neW(req, res) {
    return res.render('users/new');
  }

  create(req, res) {
    const { name, email, password } = req.body;

    const user = new User(name, email, bcrypt.hashSync(password, 10));

    if (!user)
      return res.render('users/new', {
        message: 'Usuario não foi cadastrado, tente de novamente!',
        type:'danger'
      });

    return res.render('users/new', {
      message: 'Usuario cadastrado com sucesso',
      type:'success'
    });
  }
}

export default new UsersController();
