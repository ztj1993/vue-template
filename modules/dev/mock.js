import Mock from "mockjs";

Mock.setup({
    timeout: '1000-3000'
});

let files = null;
files = require.context('../../src', true, /\/mock\/index.js$/);
files.keys().map(key => {
    files(key)
});
