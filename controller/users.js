/* eslint-disable class-methods-use-this */

const UserModel = require('../db_models/users');

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
        return UserModel.find({ email }).then(user => {
            if (!user) {
                return newUser.save().then(user => {
                    console.log('new user created', user);
                    return res.send(user);
                });
            }
            return res.status(403).send({ error: 'Email was already taken' });
        });
    }

    handleLogin(req, res, next) {
        res.send('Login');
    }

    handleSecret(req, res, next) {
        res.send('Secret');
    }
}

module.exports = new User();
