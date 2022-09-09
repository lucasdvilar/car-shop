import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import { carMock, carMockWithId } from '../mocks/carMock';
const { expect } = chai;

describe('CarModel', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'findOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('create', async () => {
    const result = await carModel.create(carMock);
    expect(result).to.be.deep.equal(carMockWithId);
  });

  it('readOne', async () => {
    const result = await carModel.readOne(carMockWithId._id);
    expect(result).to.be.deep.equal(carMockWithId);
  });
});
