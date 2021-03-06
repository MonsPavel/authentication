const Router = require('express').Router;
const router = new Router();
const { registration, login, logout, activate, refresh, getUsers } = require('../controllers/user-controller');
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post('/register', body('email').isEmail(), registration);
router.post('/login', login);
router.post('/logout', logout);
router.get('/activate/:link', activate);
router.get('/refresh', refresh);
router.get('/users', authMiddleware, getUsers);

module.exports = router;
