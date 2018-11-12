'use strict';

var config = {
    context: __dirname + "/webapp",
    entry: {
        app: './app.js',
        vendors: ["angular", "angular-ui-router", "oclazyload"]
    },
    output: {
        path: __dirname + "/bundles",
        filename: '[name].bundle.js'
    }
};

module.exports = config;