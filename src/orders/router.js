import express from 'express';
// import controller from './controller';

const router = express.Router();

router.get('/test', (req, res) => res.json({test: 'test/router-orders'}));

export default router;
