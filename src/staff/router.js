import express from 'express';
import controller from './controller';

const router = express.Router();

router.use('/hello', (req, res) => res.json({test: 'test/router-staff'}));
router.get('/controller', controller.hello);
router.get('/staff', controller.staffList);

export default router;
