import { Router } from 'express';
import CarController from '../controllers/Car';
import CarModel from '../models/Car';
import CarService from '../services/Car';

const router = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

router.post('/', (req, res) => carController.create(req, res));
router.get('/', (req, res) => carController.read(req, res));
router.get('/:id', (req, res) => carController.readOne(req, res));
router.put('/:id', (req, res) => carController.update(req, res));

export default router;
