if (process.env.NODE_ENV === 'development') {
    const files = require.context('../../src', true, /\/development\/index\.js$/);
    files.keys().map(key => {
        files(key)
    });
}
