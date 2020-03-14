const files = require.context('../../src', true, /\/utils\/index\.js$/);
files.keys().map(key => {
    files(key)
});
