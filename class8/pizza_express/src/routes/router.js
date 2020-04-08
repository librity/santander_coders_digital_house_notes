import { Router } from 'express';

import staticPagesRoutes from './staticPagesRoutes';
import usersRoutes from './usersRoutes';
import menuRoutes from './menuRoutes';
import ordersRoutes from './ordersRoutes';
import pizzasRoutes from './pizzasRoutes';

const router = Router();

router.use('/', staticPagesRoutes);
router.use('/users', usersRoutes);
router.use('/menu', menuRoutes);
router.use('/orders', ordersRoutes);
router.use('/pizzas', pizzasRoutes);

router.get('*', (req, res) => {
  return res.status(404).render('access/404', { layout: 'layouts/error' });
});

export default router;
