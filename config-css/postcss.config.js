var atImport = require("postcss-import");
var simpleVars= require('postcss-simple-vars');
var mixins = require('postcss-sassy-mixins');
var nested = require('postcss-nested');
var extendRule = require('postcss-extend-rule');
var conditionals = require('postcss-conditionals');
var postcssFor = require('postcss-for');
var each = require('postcss-each');
var defineFunction = require('postcss-define-function');
var calc = require("postcss-calc");
var presetEnv = require('postcss-preset-env');

module.exports = ctx => ({
    map: ctx.options.map,
    plugins: [
        atImport(),
        defineFunction(),
        conditionals(),
        each(),
        postcssFor(),
        nested(),
        mixins(),
        extendRule(),
        simpleVars(),
        calc(),
        presetEnv({
            browsers: 'chrome >= 45'
        }),
    ]
})

