const express = require('express');
const morgan = require('morgan');
const loadApiRoutes = require('./routes');

const db = require('./modules/db');

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// routes

app.use('/ping', (req, res) => {
    res.send('pong');
});

loadApiRoutes(app);

module.exports = app;
