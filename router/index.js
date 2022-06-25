const Router = require('express').Router;
const router = new Router();
const { registration, login, logout, activate, refresh, getUsers } = require('../controllers/user-controller');

router.post('/register', registration);
router.post('/login', login);
router.post('/logout', logout);
router.get('/activate/:link', activate);
router.get('/refresh', refresh);
router.get('/users', getUsers);

module.exports = router;
