require('dotenv').config();

module.exports = {
    app: {
        PORT: process.env.PORT,
        MONGO_URI: 'mongodb://localhost:27017/api-auth'
    },
    jwt: {
        SECRET: process.env.JWT_SECRET
    },
    google: {
        OAUTH_CLIENT_ID: process.env.GOOGLE_OAUTH_CLIENT_ID,
        OAUTH_SECRET: process.env.GOOGLE_OAUTH_CLIENT_SECRET
    }
};
