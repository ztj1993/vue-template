# 多入口多页面功能
多入口文件，主要用于多页构建。

本脚手架中的入口文件不仅仅是多页构建，还包括动态多入口。

注意：多入口需要先开启环境变量
```
PAGES_ENABLE=true
```

脚手架的入口参考：
- 主入口：参考 `src/main.js` 文件
- 自定义入口：参考 `example/multiple-entry/page.options.js` 文件
