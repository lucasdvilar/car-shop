import * as sinon from 'sinon';
import chai from 'chai';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car';
import { Request, Response } from 'express';
import { carMock, carMockWithId } from '../mocks/carMock';
const { expect } = chai;

describe('CarController', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);
  const carController = new CarController(carService);
  const req = {} as Request;
  const res = {} as Response;

  before(async () => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves([carMockWithId]);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(()=>{
    sinon.restore();
  })

  it('create', async () => {
    req.body = carMock;
    await carController.create(req, res);
    expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  });

  it('read', async () => {
    await carController.read(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith([carMockWithId])).to.be.true;
  });

  it('readOne', async () => {
    req.params = { id: carMockWithId._id };
    await carController.readOne(req, res);
    expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
    expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
  });
});
