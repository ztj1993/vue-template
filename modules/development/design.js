let files = null;

files = require.context('../../src', true, /\/design\/index\.scss$/);
files.keys().map(key => {
    files(key)
});

files = require.context('../../src', true, /\/design\.scss$/);
files.keys().map(key => {
    files(key)
});

files = require.context('../../src', true, /\/(.+?)\.design\.scss$/);
files.keys().map(key => {
    files(key)
});
