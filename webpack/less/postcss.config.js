var calc = require("postcss-calc");
var presetEnv = require('postcss-preset-env');

module.exports = ctx => ({
    map: ctx.options.map,
    plugins: [
        calc(),
        presetEnv({
            browsers: 'chrome >= 29, ie >= 9',
            autoprefixer: true,
            stage: 3,
        }),
    ]
})

