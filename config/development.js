const dotenv = require('dotenv').config()

console.log(process.env);

module.exports = {
    app: {
        PORT: process.env.PORT
    }
}
