//TODO: 动态引入 entry

module.exports = {
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 102400}));

        config.optimization.splitChunks({});

        config.plugin('inline-source')
            .use(require('html-webpack-inline-source-plugin'));

        //TODO: 动态处理 (动态引入 entry)
        config.plugins.delete('prefetch-app');
        config.plugins.delete('preload-app');
        config.plugins.delete('prefetch-home');
        config.plugins.delete('preload-home');
    },
    pages: {
        //TODO:: 动态处理 (动态引入 entry)
        "index": {
            entry: 'src/entries/app.js',
        },
        "home": {
            entry: 'src/entries/home.js',
            inlineSource: '(.css|.js)',
        },
    }
};
