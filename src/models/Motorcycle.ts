import { Schema, model as createModel } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  model: String,
  year: Number,
  color: String,
  status: Boolean,
  buyValue: Number,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

class MotorcyleModel extends MongoModel<IMotorcycle> {
  constructor(model = createModel('Motorcycle', motorcycleMongooseSchema)) {
    super(model);
  }
}

export default MotorcyleModel;
