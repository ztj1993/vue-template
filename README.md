# vue-template
一个 VUE 脚手架项目。

如何开发出来一个别人看不懂的的项目，就是再说本项目。

这个项目具有针对某些奇葩需求定制的一些功能。
比如自动配置路由，多页面构建，将 css js images 打包到 html 中等。

项目所有的功能，全部实现了自动化处理，同时采用由环境变量控制的功能开关。

为了方便大家使用，框架文档正在加速完善中。

## 项目功能
- vue, vue-router, vuex, sass
- [vue pages/multiple entry/多页面多入口功能](./docs/usage/multiple-entry.md)
- [px to viewport](./docs/usage/px-to-viewport.md)
- [px to rem](./docs/usage/px-to-rem.md)
- [单 HTML 文件打包](./docs/usage/single-html.md)
- [multiple router/多路由文件功能](./docs/usage/multiple-router.md)
- [全局插件并配置 eslint](./docs/usage/global-plugin.md)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
