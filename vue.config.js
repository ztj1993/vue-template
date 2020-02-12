let glob = require('glob');
let path = require('path');
let entries = glob.sync('src/entries/*.js');
let pages = {
    "index": {
        entry: 'src/entries/app.js',
    },
};

entries.forEach(function (entry) {
    let name = path.basename(entry, '.js');
    if (name[0] === '_') return;
    pages[name] = {
        entry: entry,
        inlineSource: '(.css|.js)',
    }
});

module.exports = {
    devServer: {
        proxy: {
            '/base': {
                target: process.env.PROXY_TARGET_BASE,
                changeOrigin: true,
                ws: true,
                pathRewrite: {'^/base': ''},
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, {limit: 102400}));

        config.optimization.splitChunks({});

        config.plugin('inline-source')
            .use(require('html-webpack-inline-source-plugin'));

        Object.keys(pages).forEach(function (page) {
            if (page === 'index') return;
            config.plugins.delete('prefetch-' + page);
            config.plugins.delete('preload-' + page);
        });
    },
    pages: pages,
};
