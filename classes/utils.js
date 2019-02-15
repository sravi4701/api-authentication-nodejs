const NODE_ENV = require('../constants/env');
const environments = require('../constants/environments');

class Utils {
    static isProduction() {
        return NODE_ENV === environments.PRODUCTION;
    }
}

module.exports = Utils;
