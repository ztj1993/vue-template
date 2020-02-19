const glob = require('glob');
const path = require('path');
const globals = {};
const definitions = glob.sync('src/definitions/*.js');

definitions.forEach(function (entry) {
    let name = path.basename(entry, '.js');
    globals[name] = true;
});

module.exports = {
    root: true,
    env: {
        node: true,
    },
    globals: {
        ...globals,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
    ],
    rules: {},
    parserOptions: {
        parser: "babel-eslint"
    }
};
