const build = require('./modules/build');
let glob = require('glob');
let path = require('path');
let entries = [];
let pages = {
    "index": {
        entry: 'src/entries/app.js',
    },
};

entries = glob.sync('src/entries/*.js');
entries.forEach(function (entry) {
    let name = path.basename(entry, '.js');
    if (name[0] === '_') return;
    name = 'html-page/' + name;
    pages[name] = {
        entry: entry,
        inlineSource: '(.css|.js)',
    }
});

entries = glob.sync('src/single/*/entry.js');
entries.forEach(function (entry) {
    let name = entry.replace(/(src\/single\/|\/entry\.js)/g, '');
    name = 'html-single/' + name;
    pages[name] = {
        entry: entry,
        inlineSource: '(.css|.js)',
    }
});

module.exports = {
    productionSourceMap: false,
    devServer: {
        ...build.get_proxy_configure(),
    },
    chainWebpack: config => {
        config.plugin().use(require.resolve('webpack/lib/ProvidePlugin'), [{
            ...build.get_definitions_configure(),
        }]);

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
