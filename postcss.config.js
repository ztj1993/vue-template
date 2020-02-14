let px_to_viewport = require('./configure/postcss-px-to-viewport');

module.exports = {
    plugins: {
        ...px_to_viewport,
    },
};
