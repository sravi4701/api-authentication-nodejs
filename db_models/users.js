const mongoose = require('mongoose');
const DB = require('../modules/db');

const { Schema } = mongoose;

// create a schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    }
});

// create a model
const User = DB.model('user', UserSchema);

// export model
module.exports = User;
