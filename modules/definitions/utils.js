function Utils() {
}

Utils.prototype.log = window.console.log;

Utils.prototype.error = window.console.error;

Utils.prototype.warn = window.console.warn;

/**
 * 对象转换
 */
Utils.prototype.object_to_object = function (source, target) {
    if (!source) return;
    if (typeof (source) !== 'object') return;
    if (!target) return;
    if (typeof (target) !== 'object') return;
    let keys = Object.keys(target);
    keys.forEach(key => {
        if (key in source) {
            target[key] = source[key];
        }
    });
};

/**
 * 哈希表互换
 */
Utils.prototype.hash_map_flip = function (object) {
    return Object.keys(object).reduce(function (acc, key) {
        acc[object[key]] = key;
        return acc;
    }, {});
};

/**
 * 设置缓存
 */
Utils.prototype.set_window_cache = function (name, value) {
    if (!window.cache) window.cache = {};
    window.cache[name] = value;
};

/**
 * 获取缓存
 */
Utils.prototype.get_window_cache = function (name) {
    if (!window.cache) return undefined;
    if (name in window.cache) {
        return window.cache[name];
    } else {
        return undefined;
    }
};

module.exports = new Utils();
