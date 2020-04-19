import Vue from 'vue'
import I18nPlugin from "../../modules/vue/i18n";

const files = require.context('../../src', true, /\/locales\/(.*)[a-z]{2}-[A-Z]{2}\.json$/);

let messages = {};
files.keys().map(file => {
    let locale = file.substr(-10, 5);
    messages[locale] = files(file)
});

let options = {
    locale: process.env.VUE_APP_I18N_LOCALE || 'zh-CN',
    fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'zh-CN',
    silentTranslationWarn: true,
    formatFallbackMessages: true,
    messages: messages,
};

Vue.use(I18nPlugin, options);
