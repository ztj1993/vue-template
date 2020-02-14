let modules = [];

if (process.env.NODE_ENV === 'development') {
    let files = null;
    files = require.context('./', false, /.dev./);
    files.keys().map(key => {
        modules.push(files(key).default)
    });

    files = require.context('../single', true, /\.\/([\w|-]+?)\/dev.js$/);
    files.keys().map(key => {
        modules.push(files(key).default)
    });
}

export default modules;
