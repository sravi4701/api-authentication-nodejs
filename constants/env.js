const environments = require('./environments');

const defaultEnv = environments.DEVELOPMENT;

const nodeEnv = process.env.NODE_ENV || defaultEnv;

module.exports = nodeEnv;
