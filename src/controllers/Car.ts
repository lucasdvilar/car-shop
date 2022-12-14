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

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const car = await this._service.update(id, req.body);
    res.status(200).json(car);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    res.status(204).end();
  }
}

export default CarController;
