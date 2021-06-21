const { api } = require('../utils/api');

class UserController {

  async getUserInfo(req, res) {
    const { data } = await api.get(`/${req.params.user}`);
    return res.status(200).json(data);
  }
}

module.exports = UserController;