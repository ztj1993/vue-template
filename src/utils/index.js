let files = require.context('./', false, /.util./);

let modules = [];

files.keys().map(key => {
    modules.push(files(key).default)
});

files = require.context('../single/utils', false, /.util./);
files.keys().map(key => {
    modules.push(files(key).default)
});

export default modules;
