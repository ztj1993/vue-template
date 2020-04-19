if (process.env.NODE_ENV === 'development') {
    let files = null;

    files = require.context('../../src', true, /\/development\/index\.js$/);
    files.keys().map(key => {
        files(key)
    });

    files = require.context('../../src', true, /\/(.+?).development.js$/);
    files.keys().map(key => {
        files(key)
    });
}
