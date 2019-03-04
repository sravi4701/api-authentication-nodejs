const JWT = require('jsonwebtoken');
const config = require('config');
const NODE_ENV = require('../constants/env');
const environments = require('../constants/environments');

class Utils {
    static isProduction() {
        return NODE_ENV === environments.PRODUCTION;
    }

    static signToken(sub) {
        return JWT.sign(
            {
                iss: 'Ravi',
                iat: new Date().getTime(),
                sub,
                exp: new Date().setDate(new Date().getDate() + 1)
            },
            config.get('jwt.SECRET')
        );
    }
}

module.exports = Utils;
