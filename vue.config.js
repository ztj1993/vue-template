const Pages = require('@vue/modules/config/vue-config-pages');
const Definitions = require('@vue/modules/config/vue-config-definitions');
const DataUri = require('@vue/modules/config/vue-config-data-uri');
const SingleJs = require('@vue/modules/config/vue-config-single-js');
const SingleHtml = require('@vue/modules/config/vue-config-single-html');
const Proxy = require('@vue/modules/config/vue-config-proxy');

const options = {
    ...Pages(),
};

module.exports = {
    productionSourceMap: false,
    devServer: {
        ...Proxy(),
    },
    chainWebpack: config => {
        // 全局定义配置
        Definitions(config);
        // 单 HTML 内联样式和脚本配置
        SingleHtml(config, options);
        // 单 JS 文件
        SingleJs(config);
        // DataUri
        DataUri(config);
    },
    ...options,
};
