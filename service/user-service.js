const UserModal = require('../models/user-model');
const UserDto = require('../dtos/user-dto');

const bcrypt = require('bcrypt');
const uuid = require('uuid');

const { sendActivationMail } = require('./mail-service');
const { generateTokens, saveToken } = require('./token-service');

class UserService {
    async registration(email, password) {
        const candidate = await UserModal.find({email});
        if(candidate.length) {
            throw new Error(`Пользователь с email ${email} уже существует`);
        }
        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4();

        const user = await UserModal.create({ email, password: hashPassword, activationLink });
        await sendActivationMail(email, activationLink);

        const userDto = new UserDto(user);
        const tokens = generateTokens({...userDto});
        await saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: UserDto
        }
    }
}

module.exports = new UserService();