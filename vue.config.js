const build = require('@vue/modules');

const options = {
    ...build.get_vue_cli_options(),
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
        // 单 JS 文件
        build.configure_single_js(config);
        // DataUri
        build.configure_data_uri(config);
    },
    ...options,
};
