let files = null;
let routes = [];

files = require.context('../../src/pages', true, /.vue$/);
files.keys().map(key => {
    let name = key.replace(/(\.\/|\.vue)/g, '');
    routes.push({
        path: '/page/' + name,
        component: files(key).default
    })
});

module.exports = routes;
