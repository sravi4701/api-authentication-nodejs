/* eslint-disable class-methods-use-this */
const Joi = require('joi');

class ValidationSchema {
    signUpSchema() {
        return Joi.object().keys({
            email: Joi.string().email(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        });
    }
}

module.exports = new ValidationSchema();
