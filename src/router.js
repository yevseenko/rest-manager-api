import express from 'express';
import staff from './staff';

const router = express.Router();

router.use('/test', (req, res) => res.json({hello: 'world'}));
router.use('/staff', staff);
//router.use('/video', require('./video'));
// router.use('/teachers', require('./teachers'));

export default router;
