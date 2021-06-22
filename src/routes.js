const { Router } = require('express');
const UserController = require('./controllers/UserController');
const RepositoryController = require('./controllers/RepositoryController');

const router = Router();
const userController = new UserController();
const repositoryController = new RepositoryController();

router.get('/info/:user', userController.getUserInfo);
router.get('/repos/:user', repositoryController.getReposByUser);

module.exports = router;