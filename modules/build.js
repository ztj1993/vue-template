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

    const pages = {
        ...get_index_entry(),
        ...get_page_entries(),
        ...get_single_entries(),
    };

    return {pages: pages};
}

function get_index_entry() {
    return {
        "index": {
            entry: 'src/main.js',
        },
    }
}

function get_page_entries() {
    const pages = {};
    const entries = glob.sync('src/entries/*.js');

    entries.forEach(function (entry) {
        let name = path.basename(entry, '.js');
        if (name[0] === '_') return;
        name = 'html-page/' + name;
        pages[name] = {
            entry: entry,
        }
    });

    return pages;
}

function get_single_entries() {
    const pages = {};
    const entries = glob.sync('src/single/*/entry.js');

    entries.forEach(function (entry) {
        let name = entry.replace('/entry.js', '').replace(/(.+?)\//g, '');
        name = 'html-single/' + name;
        pages[name] = {
            entry: entry,
            inlineSource: '(.css|.js)',
        }
    });

    return pages;
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

    return proxy;
}

function get_definitions_configure() {
    const options = {};
    const files = glob.sync('src/definitions/*.js');

    files.forEach(function (file) {
        let name = path.basename(file, '.js');
        options[name] = require.resolve('../' + file);
    });

    return options;
}

module.exports = {
    configure_single_html,
    get_pages_configure,
    get_proxy_configure,
    get_definitions_configure,
};
