const { expect } = require('chai');
const RepositoryController = require('../src/controllers/RepositoryController');
const nock = require('nock');


// Controller
const repositoryController = new RepositoryController();

// Mocks
const requestMock = {
  params: {
    user: 'joaovictornsv'
  }
}

const responseMock = {
  status() { return responseMock },
  json(data) { return data }
}

const successReturnMock = 
  [
    {
      id: 1,
      repo: 'mock-repo1'
    },
    {
      id: 2,
      repo: 'mock-repo2'
    },
  ]


describe('RepositoryController', () => {
  it('should get list of repositories', async () => {
    nock('https://api.github.com')
      .get(/\/users\/([a-z]+)\/repos/g)
      .reply(200, successReturnMock);

    const response = await repositoryController.getReposByUser(requestMock, responseMock);
    expect(response).to.have.length(2);
  })
})