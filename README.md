# vue framework && vue template && vue skeleton
这是一个 VUE 框架。  
这是一个 VUE 模板。  
这是一个 VUE 脚手架。  
这是一个通用的 VUE 基础骨架。

项目具有针对某些奇葩需求定制的一些功能。
比如自动配置路由，多页面构建，将 css js images 打包到 html 中等。

项目功能由环境变量控制。

## 项目功能
- vue, vue-router, vuex, sass
- [vue pages/multiple entry/多页面多入口功能](./docs/usage/multiple-entry.md)
- [px to viewport](./docs/usage/px-to-viewport.md)
- [px to rem](./docs/usage/px-to-rem.md)
- [单 HTML 文件打包](./docs/usage/single-html.md)
- [multiple router/多路由文件功能](./docs/usage/multiple-router.md)
- [全局插件并配置 eslint](./docs/usage/global-plugin.md)

## 环境变量
名称|类型|默认|说明
---|---|---|---
PAGES_ENABLE|bool|false|是否启用多页面入口
SINGLE_HTML_ENABLE|bool|false|是否启用单 HTML 文件打包
SINGLE_JS_ENABLE|bool|false|是否启用单 JS 文件打包
DATA_URI_ENABLE|bool|false|是否启用 DATA URI 文件打包
VUE_CLI_FILENAME_HASHING|bool|true|是否启用打包文件带 HASH 值
PROXY_ENABLE|bool|false|是否启用代理
PROXY_TARGET|string|-|代理来源
PROXY_PREFIX|string|-|代理前缀

## 项目使用
```
yarn install
yarn serve
yarn build
```
