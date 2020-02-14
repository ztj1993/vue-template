let options = {};

let enable = process.env.POSTCSS_PX_TO_VIEWPORT_ENABLE;
let viewport_width = process.env.POSTCSS_PX_TO_VIEWPORT_VIEWPORT_WIDTH;
let viewport_unit = process.env.POSTCSS_PX_TO_VIEWPORT_VIEWPORT_UNIT;
let font_viewport_unit = process.env.POSTCSS_PX_TO_VIEWPORT_FONT_VIEWPORT_UNIT;

if (viewport_width) options['viewportWidth'] = viewport_width;
if (viewport_unit) options['viewportUnit'] = viewport_unit;
if (font_viewport_unit) options['fontViewportUnit'] = font_viewport_unit;

module.exports = function () {
    if (!enable) return {};
    return {
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            unitPrecision: 5,
            selectorBlackList: ['.ignore'],
            minPixelValue: 1,
            mediaQuery: false,
            ...options,
        },
    };
};
