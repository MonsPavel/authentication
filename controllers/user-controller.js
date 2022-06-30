const { registration, activate, login } = require('../service/user-service');
const { validationResult } = require('express-validator');
const ApiError = require('../exceptions/api-error');

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Неккоректный email', errors.array()));
            }
            const { email, password } = req.body;
            const userData = await registration(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

            return res.send(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const userData = await login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true})

            return res.send(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async activate(req, res, next) {
        try {
            const { link } = req.params;
            await activate(link);
            return res.redirect(process.env.CLIENT_URL);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req, res, next) {
        try {

        } catch (e) {
            next(e);
        }
    }

    async getUsers(req, res, next) {
        try {
            res.send(['123', '456']);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new UserController();
