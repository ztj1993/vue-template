# 多入口文件
多入口文件，主要用于多页构建。

但本脚手架中的入口文件不仅仅是多页构建，还包括动态多入口。

脚手架的入口主要有三个：
- 主入口
- 自定义入口
- 单页入口

参考：
```
example/sample/entries/sample.js
example/sample/single/sample/entry.js
```

注意：多入口需要先开启环境变量
```
PAGES_ENABLE=true
```

## 主入口
文件：
```
src/main.js
```
路由：
```
/
```

## 自定义入口
文件：
```
src/entries/*.js
```
路由：
```
/html-page/*
```

## 单页入口
文件：
```
src/single/*/entry.js
```
路由：
```
/html-single/*
```
