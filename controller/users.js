/* eslint-disable class-methods-use-this */

const UserModel = require('../db_models/users');
const Utils = require('../classes/utils');

class User {
    handleGet(req, res, next) {
        res.send('Get single user');
    }

    handleSignup(req, res, next) {
        const { email, password } = req.body;
        const newUser = new UserModel({
            email,
            password
        });
        return UserModel.findOne({ email }).then(user => {
            if (!user) {
                return newUser.save().then(user => {
                    console.log('new user created', user);
                    const token = Utils.signToken({ id: user.id });
                    return res.send({
                        data: {
                            token
                        }
                    });
                });
            }
            return res.status(403).send({ error: 'Email was already taken' });
        });
    }

    handleLogin(req, res, next) {
        // send token
        const user = req.user;
        const token = Utils.signToken({ id: user.id });
        res.send({
            data: {
                token
            }
        });
    }

    handleSecret(req, res, next) {
        res.send('Secret');
    }
}

module.exports = new User();
