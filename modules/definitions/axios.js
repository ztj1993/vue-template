let axios = require("axios");

axios.defaults.timeout = 10000;
axios.defaults.baseURL = process.env.VUE_APP_API_URI;

module.exports = axios;
