/* eslint-disable class-methods-use-this */
class User {
    handleGet(req, res, next) {
        res.send('Get single user');
    }
}

module.exports = new User();
