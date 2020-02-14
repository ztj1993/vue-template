import Vue from 'vue'
import VueRouter from 'vue-router'

let files = null;
let routes = [];

Vue.use(VueRouter);

files = require.context('./', false, /.router.js$/);
files.keys().map(key => {
    routes.push(...files(key).default);
});

files = require.context('../pages', true, /.vue$/);
files.keys().map(key => {
    let name = key.replace(/(\.\/|\.vue)/g, '');
    routes.push({
        path: '/page/' + name,
        component: files(key).default
    })
});

files = require.context('../single', true, /\.\/([\w|-]+?)\/index.vue$/);
files.keys().map(key => {
    let name = key.replace(/(\.\/|\/index\.vue)/g, '');
    routes.push({
        path: '/single/' + name,
        component: files(key).default
    })
});

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router
