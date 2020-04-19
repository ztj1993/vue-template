let routes = [];
let files = null;

files = require.context('../../src', true, /\/testing.vue$/);
files.keys().map(key => {
    let name = key.replace('/testing.vue', '').replace(/(.+?)\//g, '');
    routes.push({
        path: '/testing/' + name,
        component: files(key).default
    })
});

module.exports = routes;
