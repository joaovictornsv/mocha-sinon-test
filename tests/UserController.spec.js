const sinon = require('sinon');
const { expect } = require('chai');
const UserController = require('../src/controllers/UserController')

let sandbox = sinon.createSandbox();

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



const userController = new UserController();

describe('UserController', () => {
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  })

  afterEach(() => {
    sandbox.restore();
  })
  it('should get user info', async () => {
    
    let returnMock = {
      statusCode: 200,
      data: {
        id: 1
      }
    }
 
    sandbox.stub(responseMock, 'json').returns(returnMock);

    const response = await userController.getUserInfo(requestMock, responseMock);

    expect(response.data).to.equal(returnMock.data);
    expect(response.data).to.haveOwnProperty('id');

    expect(response.statusCode).to.equal(200);
  })

  it('should be call method json in response', async () => {
    // Spy
    const jsonSpy = sinon.spy(responseMock, 'json');

    await userController.getUserInfo(requestMock, responseMock);

    expect(jsonSpy.called).to.equal(true);
    expect(jsonSpy.callCount).to.equal(1);
  })
})