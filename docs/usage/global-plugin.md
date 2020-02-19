# 自动加载全局插件并配置 ESLint
在开发中，我们需要用到一些全局插件，如 jQuery，自定义的全局库等。
在 vue cli 中，这些是需要手动配置的，但在本框架中，只需要放入指定的位置即可。

## 全局插件目录
```
/src/definitions
```

## 示例

### 添加全局 axios
新建文件：`/src/definitions/axios.js`
```
module.exports = require('../../modules/definitions/axios');
```

页面中使用(无需引入包)：
```
axios.get(url)
```
