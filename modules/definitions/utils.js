var Utils = (function () {
    function Utils() {
        this.debug = true;
    }

    Utils.prototype.log = function (message) {
        this.debug && window.console.log(message);
    };
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
    return Utils;
}());

module.exports = new Utils();
