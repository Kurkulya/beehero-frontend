const withSass = require('@zeit/next-sass');
require('dotenv').config();

module.exports = withSass({
    webpack: (config) => {
        config.node = {
            fs: 'empty',
        };
        return config;
    },
});
