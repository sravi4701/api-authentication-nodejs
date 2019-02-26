const express = require('express');

const router = express.Router();
const userController = require('../controller/users');
const validationSchema = require('../classes/validation-schema');
const validateBodyMiddleware = require('../middlewares/validate-body');

router.post(
    '/signup',
    validateBodyMiddleware(validationSchema.signUpSchema()),
    userController.handleSignup
);

router.post('/login', userController.handleLogin);
router.get('/secret', userController.handleSecret);

module.exports = router;
