import { Router } from 'express';
import carsRouter from './cars';

const router = Router();

router.use('/cars', carsRouter);

export default router;
