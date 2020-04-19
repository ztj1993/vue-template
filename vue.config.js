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
        // 全局定义配置
        build.configure_definitions(config);
        // 单 HTML 内联样式和脚本配置
        build.configure_single_html(config, options);
    },
    ...options,
};
