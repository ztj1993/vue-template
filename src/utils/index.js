let files = require.context('./', false, /[scss|js]$/);

files.keys().map(key => {
    if(key === './index.js') return;
    files(key)
});
