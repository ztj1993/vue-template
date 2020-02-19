const build = require('./modules/build');
const options = {
    ...build.get_pages_configure(),
};

module.exports = {
    productionSourceMap: false,
    devServer: {
        ...build.get_proxy_configure(),
    },
    chainWebpack: config => {
        config.plugin().use(require.resolve('webpack/lib/ProvidePlugin'), [{
            ...build.get_definitions_configure(),
        }]);

        // 单 HTML 内联样式和脚本配置
        build.configure_single_html(config, options);
    },
    ...options,
};
