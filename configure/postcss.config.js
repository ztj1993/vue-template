module.exports = {
    plugins: {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 768,
            unitPrecision: 5,
            viewportUnit: 'vmin',
            fontViewportUnit: 'vmin',
            selectorBlackList: [/^\.van-/],
            minPixelValue: 1,
            mediaQuery: false,
        },
    },
};
