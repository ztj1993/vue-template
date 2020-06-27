export default {
    include: (files) => {
        files.keys().map(key => {
            files(key)
        });
    },
};

// const files = require.context('../../src', true, /\/design\/index\.js$/);
// const files = require.context('../../src', true, /\/design\.js$/);
// const files = require.context('../../src', true, /\/(.+?)\.design\.js$/);

// const files = require.context('../../src', true, /\/development\/index\.js$/);
// const files = require.context('../../src', true, /\/development\.js$/);
// const files = require.context('../../src', true, /\/(.+?)\.development\.js$/);

// const files = require.context('../../src', true, /\/mock\/index\.js$/);
// const files = require.context('../../src', true, /\/mock\.js$/);
// const files = require.context('../../src', true, /\/(.+?)\.mock\.js$/);
