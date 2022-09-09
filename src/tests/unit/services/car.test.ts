import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockWithId } from '../mocks/carMock';
const { expect } = chai;

describe('CarService', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockWithId);
    sinon.stub(carModel, 'read').resolves([carMockWithId]);
    sinon.stub(carModel, 'readOne').resolves(carMockWithId);
  });

  after(()=>{
    sinon.restore();
  })

  it('create', async () => {
    const result = await carService.create(carMock);
    expect(result).to.be.deep.equal(carMockWithId);
  });

  it('read', async () => {
    const result = await carService.read();
    expect(result).to.be.deep.equal([carMockWithId]);
  });

  it('readOne', async () => {
    const result = await carService.readOne(carMockWithId._id);
    expect(result).to.be.deep.equal(carMockWithId);
  });
});
