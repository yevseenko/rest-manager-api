import express from 'express';
import staff from './staff';
import menu from './menu';
import tables from './tables';
import orders from './orders';

const router = express.Router();

router.use('/test', (req, res) => res.json({hello: 'world'}));
router.use('/staff', staff);
router.use('/menu', menu);
router.use('/tables', tables);
router.use('/orders', orders);

export default router;
