import { Router } from 'express';
import carsRouter from './cars';
import motorcyclesRouter from './motorcycles';

const router = Router();

router.use('/cars', carsRouter);
router.use('/motorcycles', motorcyclesRouter);

export default router;
