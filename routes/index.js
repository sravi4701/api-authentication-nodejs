const userRouter = require('./users');
const app = require('../app');

module.exports = function(app) {
    app.use('/users', userRouter);
}