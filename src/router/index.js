import Vue from 'vue'
import VueRouter from 'vue-router'

let files = null;
let routes = [];

Vue.use(VueRouter);

files = require.context('./', false, /.router.js$/);
files.keys().map(key => {
    routes.push(...files(key));
});

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router
