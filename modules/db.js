const mongoose = require('mongoose');
const config = require('config');
const Promise = require('bluebird');

const MONGO_URI = config.get('app.MONGO_URI');

const options = {
    useCreateIndex: true, // default false
    autoIndex: false, // default true
    useNewUrlParser: true, // port is required in mongodb connection string
    // useFindAndModify: false // by default is true, when it is true then
    // then it call findAndModify when it is false then it calls findOneAndUpdate
    // or findOneAndDelete
    autoReconnect: true, // it will try to reconnect automatically when fails to connect
    reconnectTries: Number.MAX_VALUE, // no of retry
    reconnectInterval: 2000, // retry in  2 seconds
    promiseLibrary: Promise // we use bluebird promise to manage async calls
};

const db = mongoose.createConnection(MONGO_URI, options);

db.on('connecting', () => {
    console.log(`connecting to mongodb ${MONGO_URI}`);
});

db.on('connected', () => {
    console.log(`connected to mongodb ${MONGO_URI}`);
});

db.on('reconnected', () => {
    console.log(`re connected to mongodb ${MONGO_URI}`);
});

db.on('disconnected', () => {
    console.log(`disconnected from mongodb ${MONGO_URI}`);
});

db.on('error', () => {
    console.log(`error while connecting to ${MONGO_URI}`);
});

module.exports = db;
