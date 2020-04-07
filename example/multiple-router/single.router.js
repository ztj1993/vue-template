let files = null;
let routes = [];

files = require.context('../../src/single', true, /\.\/([\w|-]+?)\/index.vue$/);
files.keys().map(key => {
    let name = key.replace(/(\.\/|\/index\.vue)/g, '');
    routes.push({
        path: '/single/' + name,
        component: files(key).default
    })
});

module.exports = routes;
