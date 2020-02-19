let px_viewport = require('./modules/config/postcss-px-to-viewport');

module.exports = {
    plugins: {
        ...px_viewport,
    },
};
