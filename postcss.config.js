let px_viewport = require('./modules/config/postcss-px-to-viewport');
let px_rem = require('./modules/config/postcss-plugin-px2rem');

module.exports = {
    plugins: {
        ...px_viewport,
        ...px_rem,
    },
};
