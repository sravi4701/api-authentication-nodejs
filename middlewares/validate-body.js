const Joi = require('joi');

module.exports = function (schema) {
    return (req, res, next) => {
        const { error, value } = Joi.validate(req.body, schema);
        if (error) {
            res.status(400).json(error);
        }
        req.validated_body = value;
        next();
    };
};
