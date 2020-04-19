import Vue from 'vue'
import RouterPlugin from '../vue/router';

let files = null;
let routes = [];

files = require.context('../../src', true, /\/router.js$/);
files.keys().map(key => {
    routes.push(...files(key).default)
});

files = require.context('../../src', true, /\/(.+?).router.js$/);
files.keys().map(key => {
    routes.push(...files(key).default)
});

Vue.use(RouterPlugin, {routes: routes});
