const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares
app.use(morgan('dev'));

// routes

app.use('/ping', (req, res) => {
    res.send('pong');
});

module.exports = app;