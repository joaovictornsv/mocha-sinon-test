const { api } = require('../utils/api');

class RepositoryController {

  async getReposByUser(req, res) {
    const { data } = await api.get(`/${req.params.user}/repos`);
    return res.status(200).json(data);
  }
}

module.exports = RepositoryController;