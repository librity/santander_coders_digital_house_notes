import User from '../models/User';
import bcrypt from 'bcrypt';

class SessionsController {
  neW(req, res) {
    return res.render('sessions/new');
  }

  create(req, res) {
    const { email, password } = req.body;

    const user = User.findByEmail(email);

    if (user == undefined || !bcrypt.compareSync(password, user.password)) {
      return res.render('sessions/new', {
        message: 'Email ou senha invalida!',
        type: 'danger',
      });
    }

    req.session.username = user.name;

    res.redirect('/pizzas');
  }
}

export default new SessionsController();
