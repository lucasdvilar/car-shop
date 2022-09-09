import { Request, Response } from 'express';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import { IService } from '../interfaces/IService';

class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) {}

  public async create(req: Request, res: Response) {
    const motorcycle = await this._service.create(req.body);
    res.status(201).json(motorcycle);
  }

  public async read(_req: Request, res: Response) {
    const motorcycles = await this._service.read();
    res.status(200).json(motorcycles);
  }

  public async readOne(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = await this._service.readOne(id);
    res.status(200).json(motorcycle);
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const motorcycle = await this._service.update(id, req.body);
    res.status(200).json(motorcycle);
  }

  public async delete(req: Request, res: Response) {
    const { id } = req.params;
    await this._service.delete(id);
    res.status(204).end();
  }
}

export default MotorcycleController;
