import express from 'express';

const router = express.Router();

router.use('/test', (req, res) => res.json({hello: 'world'}));
//router.use('/video', require('./video'));
// router.use('/teachers', require('./teachers'));

export default router;