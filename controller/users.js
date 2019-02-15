/* eslint-disable class-methods-use-this */
class User {
    handleGet(req, res, next) {
        res.send('Get single user');
    }

    handleSignup(req, res, next) {
        console.log(req.validated_body);
        res.send('Signup');
    }

    handleLogin(req, res, next) {
        res.send('Login');
    }

    handleSecret(req, res, next) {
        res.send('Secret');
    }
}

module.exports = new User();
