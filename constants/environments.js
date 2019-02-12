const SmartEnums = require('../classes/smart-enums');

const environments = new SmartEnums({
    DEVELOPMENT: 'development',
    STAGING: 'staging',
    TEST: 'test',
    PRODUCTION: 'production'
});

module.exports = environments;
