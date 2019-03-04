const express = require('express');
const morgan = require('morgan');
const loadApiRoutes = require('./routes');

require('./modules/db'); // initialize database

require('./middlewares/passport'); // configure passport strategies

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
