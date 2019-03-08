const express = require('express');

const router = express.Router();
const passport = require('passport');
const authController = require('../controller/auth');
const validationSchema = require('../classes/validation-schema');
const validateBodyMiddleware = require('../middlewares/validate-body');

router.post(
    '/signup',
    validateBodyMiddleware(validationSchema.signUpSchema()),
    authController.handleSignup
);

router.post(
    '/login',
    passport.authenticate('local', { session: false }),
    authController.handleLogin
);

router.post(
    '/google-oauth-login',
    passport.authenticate('google', {
        session: false
    }),
    authController.handleGoogleOauthLogin
);

router.get(
    '/secret',
    passport.authenticate('jwt', { session: false }), // passport authenticate middleware
    authController.handleSecret
);

module.exports = router;
