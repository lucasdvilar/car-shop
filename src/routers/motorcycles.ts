import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcyleModel from '../models/Motorcycle';
import MotorcyleService from '../services/Motorcycle';

const router = Router();

const motorcyleModel = new MotorcyleModel();
const motorcyleService = new MotorcyleService(motorcyleModel);
const motorcyleController = new MotorcycleController(motorcyleService);

router.post('/', (req, res) => motorcyleController.create(req, res));
router.get('/', (req, res) => motorcyleController.read(req, res));
router.get('/:id', (req, res) => motorcyleController.readOne(req, res));
router.put('/:id', (req, res) => motorcyleController.update(req, res));
router.delete('/:id', (req, res) => motorcyleController.delete(req, res));

export default router;
