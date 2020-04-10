import { Router } from 'express';

import staticPagesRoutes from './staticPagesRoutes';
import usersRoutes from './usersRoutes';
import sessionsRoutes from './sessionsRoutes';
import menuRoutes from './menuRoutes';
import ordersRoutes from './ordersRoutes';
import pizzasRoutes from './pizzasRoutes';

import templateLocals from '../middlewares/templateLocals';

const router = Router();

router.use(templateLocals);

router.use('/', staticPagesRoutes);
router.use('/users', usersRoutes);
router.use('/sessions', sessionsRoutes);
router.use('/menu', menuRoutes);
router.use('/%F0%9F%8D%95', menuRoutes); // 🍕
router.use('/orders', ordersRoutes);
router.use('/pizzas', pizzasRoutes);

router.get('*', (req, res) => {
  return res.status(404).render('access/404', { layout: 'layouts/error' });
});

export default router;
