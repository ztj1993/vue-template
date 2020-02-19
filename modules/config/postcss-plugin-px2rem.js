module.exports = (function () {
    let options = {};

    let enable = process.env.POSTCSS_PLUGIN_PX2REM_ENABLE;

    if (enable !== 'true') return {};
    return {
        'postcss-plugin-px2rem': {
            rootValue: 16,
            unitPrecision: 5,
            selectorBlackList: ['.ignore'],
            propWhiteList: [],
            propBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 1,
            ...options,
        },
    };
})();
