import VueI18n from 'vue-i18n'

const I18nPlugin = {
    install: (Vue, options = {}) => {
        Vue.use(VueI18n);
        Vue.prototype._i18n = new VueI18n(options);
    },
};

export default I18nPlugin;
