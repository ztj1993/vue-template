let files = null;
files = require.context('../../src', true, /\/design\/design.scss$/);
files.keys().map(key => {
    files(key)
});
