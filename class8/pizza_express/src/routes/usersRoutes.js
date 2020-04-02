import { Router } from 'express';

const usersRoutes = Router();

usersRoutes.get('/:nome', (req, res) => {
  const { name } = req.params;

  res.send(`Seja bem vindo ${name}`).end();
});

export default usersRoutes;
