var Utils = (function () {
    function Utils() {
        this.debug = true;
    }

    Utils.prototype.log = window.console.log;

    Utils.prototype.error = window.console.error;

    Utils.prototype.warn = window.console.warn;

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

    Utils.prototype.set_window_cache = function (name, value) {
        if (!window.cache) window.cache = {};
        window.cache[name] = value;
    };

    Utils.prototype.get_window_cache = function (name) {
        if (!window.cache) return undefined;
        if (name in window.cache) {
            return window.cache[name];
        } else {
            return undefined;
        }
    };
    return Utils;
}());

module.exports = new Utils();
