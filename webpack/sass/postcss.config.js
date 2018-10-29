var calc = require("postcss-calc");
var presetEnv = require('postcss-preset-env');
var nodesass = require('postcss-node-sass');

module.exports = ctx => ({
    map: ctx.options.map,
    plugins: [
        nodesass(),
        calc(),
        presetEnv({
            browsers: 'chrome >= 29, ie >= 9',
            autoprefixer: true,
            stage: 3,
        }),
    ]
})

