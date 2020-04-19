const glob = require('glob');
const path = require('path');

function configure_single_html(config, options) {
    if (process.env.SINGLE_HTML_ENABLE !== 'true') return {};

    config.optimization.splitChunks(false);

    config.module
        .rule('images')
        .use('url-loader')
        .loader('url-loader')
        .tap(options => Object.assign(options, {limit: 102400}));

    config.plugin('inline-source').use(require('html-webpack-inline-source-plugin'));

    if (options.pages) {
        Object.keys(options.pages).forEach(page => {
            config.plugins.delete('prefetch-' + page);
            config.plugins.delete('preload-' + page);
            config.plugin('html-' + page).tap((args) => {
                args[0].inlineSource = '(.css|.js)';
                return args
            });
        });
    } else {
        config.plugins.delete('prefetch');
        config.plugins.delete('preload');
        config.plugin('html').tap((args) => {
            args[0].inlineSource = '(.css|.js)';
            return args
        });
    }
}

function get_pages_configure() {
    if (process.env.PAGES_ENABLE !== 'true') return {};

    let pages = {};
    let entries = [];

    entries.push(...glob.sync('src/**/entry.options.js'));
    entries.push(...glob.sync('src/**/entry/options.js'));
    entries.forEach(function (entry) {
        let page = null;
        if (process.env.INIT_CWD) {
            page = path.join(process.env.INIT_CWD, entry);
        } else {
            page = entry;
        }
        pages = Object.assign(pages, require(page));
    });

    return {pages: pages};
}

function get_proxy_configure() {
    if (process.env.PROXY_ENABLE !== 'true') return {};

    const proxy = {};
    const proxy_target = process.env.PROXY_TARGET;
    const proxy_prefix = process.env.PROXY_PREFIX;

    if (proxy_target !== '' && proxy_prefix !== '') {
        let path_rewrite = {};
        path_rewrite['^' + proxy_prefix] = '';
        proxy[proxy_prefix] = {
            target: proxy_target,
            changeOrigin: true,
            ws: true,
            pathRewrite: path_rewrite,
        };
    }

    return {proxy: proxy};
}

function configure_definitions(config) {
    const options = {};
    const files = glob.sync('src/**/*.definition.js');

    files.forEach(function (file) {
        const name = path.basename(file).replace('.definition.js', '');
        options[name] = require.resolve('../' + file);
    });

    config.plugin().use(require.resolve('webpack/lib/ProvidePlugin'), [{
        ...options,
    }]);
}

module.exports = {
    configure_single_html,
    get_pages_configure,
    get_proxy_configure,
    configure_definitions,
};
