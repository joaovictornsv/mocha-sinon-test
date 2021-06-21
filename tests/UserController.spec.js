const sinon = require('sinon');
const { expect } = require('chai');
const UserController = require('../src/controllers/UserController')
const { api } = require('../src/utils/api')

let sandbox = sinon.createSandbox();

// Controller
const userController = new UserController();

// Mocks
const requestMock = {
  params: {
    user: 'joaovictornsv'
  }
}

const responseMock = {
  status() { return responseMock },
  json() { }
}

const successReturnMock = {
  statusCode: 200,
  data: {
    id: 1
  }
}

describe('UserController', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  })

  afterEach(() => {
    sandbox.restore();
  })
  it('should get user info', async () => {
    sandbox.stub(userController, 'getUserInfo').returns(successReturnMock);

    const response = await userController.getUserInfo(requestMock, responseMock);

    expect(response.data).to.equal(successReturnMock.data);
    expect(response.data).to.haveOwnProperty('id');

    expect(response.statusCode).to.equal(200);
  })

  it('should be call method json in response', async () => {
    sandbox.stub(api, 'get').returns(successReturnMock);
    
    // Spy
    const jsonSpy = sinon.spy(responseMock, 'json');
    
    const res = await userController.getUserInfo(requestMock, responseMock);

    expect(jsonSpy.calledOnce).to.equal(true);
  })
})