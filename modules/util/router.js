import Vue from 'vue'
import RouterPlugin from '../plugin/router';

export default {
    init: (files) => {
        const routes = [];
        files && files.keys().map(key => {
            routes.push(...files(key).default)
        });
        Vue.use(RouterPlugin, {routes: routes});
    },
};

// const files = require.context('../../src', true, /\/router.js$/);
// const files = require.context('../../src', true, /\/(.+?).router.js$/);
