import { Request, Response } from 'express';
import { ICar } from '../interfaces/ICar';
import { IService } from '../interfaces/IService';

class CarController {
  constructor(private _service: IService<ICar>) {}

  public async create(req: Request, res: Response) {
    const car = await this._service.create(req.body);
    res.status(201).json(car);
  }

  public async read(_req: Request, res: Response) {
    const cars = await this._service.read();
    res.status(200).json(cars);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.readOne(id);
    res.status(200).json(car);
  }
}

export default CarController;
