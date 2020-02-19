# 多路由文件

多路由功能可以完全的自定义路由，定义的路由放在 `src/router` 目录即可。

定义的文件名命名规范为：`*.router.js`

返回的数据要求是一个路由列表，参考：
```
example/sample/router/sample.router.js
modules/router/pages.router.js
modules/router/single.router.js
modules/router/testing.router.js
```

## 公有路由说明

### pages.router.js
定义了 `src/pages/{name}.vue` 的所有路由。

路由访问：`/page/{name}`

### single.router.js
定义了 `src/single/*/index.vue` 的所有路由。

路由访问：`/single/{name}`

### testing.router.js
定义了 `src/**/testing.vue` 的所有路由。

路由访问：`/testing/{name}`

这个路由用于写组件的测试文件。
