const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const DB = require('../modules/db');

const { Schema } = mongoose;

// create a schema
const UserSchema = new Schema({
    method: {
        type: String,
        enum: ['local', 'google', 'facebook']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        type: String
    },
    google: {},
    facebook: {}
});

// pre('save') middleware calls before writing document to db.
// takes next function and and pass it to another level of middleware
// this represents to document
UserSchema.pre('save', function (next) {
    this.wasNew = this.isNew;
    // if this is the new record that is going to save in db for the first time.
    if (this.isModified('password')) {
        // generate salt
        const salt = bcrypt.genSaltSync(10);
        console.log('salt', salt);
        // generate hash for the passport
        const hash = bcrypt.hashSync(this.password, salt);
        console.log('hash', hash);
        this.password = hash;
    }
    next();
});

UserSchema.methods.isValidPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// create a model
const User = DB.model('user', UserSchema);

// export model
module.exports = User;
