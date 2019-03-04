const express = require('express');

const router = express.Router();
const passport = require('passport');
const userController = require('../controller/users');
const validationSchema = require('../classes/validation-schema');
const validateBodyMiddleware = require('../middlewares/validate-body');

router.post(
    '/signup',
    validateBodyMiddleware(validationSchema.signUpSchema()),
    userController.handleSignup
);

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    userController.handleLogin
);

router.get(
    '/secret',
    passport.authenticate('jwt', { session: false }), // passport authenticate middleware
    userController.handleSecret
);

module.exports = router;
