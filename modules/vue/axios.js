import Vue from 'vue'
import axios from "../definitions/axios";

let ApiPlugin = function () {
};

ApiPlugin.install = function (Vue, options) {
    Vue.prototype.$axios = axios.create({
        ...options,
    });
};

Vue.use(ApiPlugin);
