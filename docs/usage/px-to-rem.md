# px-to-rem

### 核心文件
```
modules/config/postcss-px-to-viewport.js
modules/definitions/zoom.js
```

### 启用环境
```
POSTCSS_PLUGIN_PX2REM_ENABLE=true
```

### 创建定义
src/definitions/zoom.js
```
module.exports = require('../../modules/definitions/zoom');
```

### 初始化 (支持所有屏幕)
src/utils/_.util.js
```
zoom.init(1024, 768);
zoom.set_body_font_size();
zoom.set_html_font_size();
```
