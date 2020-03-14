const glob = require('glob');
const path = require('path');
const globals = {};
const definitions = glob.sync('src/**/*.definition.js');

definitions.forEach(function (file) {
    const name = path.basename(file).replace('.definition.js', '');
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
