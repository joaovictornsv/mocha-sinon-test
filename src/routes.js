const { Router } = require('express');
const UserController = require('./controllers/UserController') 

const router = Router();
const userController = new UserController();

router.get('/info/:user', userController.getUserInfo)
router.get('/repos/:user', userController.getUserRepos)

module.exports = router;