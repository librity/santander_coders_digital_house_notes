import { Router } from 'express';

import usersRoutes from './usersRoutes';
import menuRoutes from './menuRoutes';
import ordersRoutes from './ordersRoutes';

const router = Router();

router.get('/', (req, res) => {
  const { name } = req.query;

  res.render('admin/index', {
    products: ['produtos1', 'produtos2', 'produtos3', 'produtos4'],
    test: name,
  });
});

router.use('/users', usersRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', ordersRoutes);

export default router;
