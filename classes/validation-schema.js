/* eslint-disable class-methods-use-this */
const Joi = require('joi');

class ValidationSchema {
    signUpSchema() {
        return Joi.object().keys({
            username: Joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
        });
    }
}

module.exports = new ValidationSchema();
