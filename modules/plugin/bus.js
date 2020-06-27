import Vue from 'vue'

let ApiPlugin = {
    install: () => {
        Vue.prototype.$bus = new Vue();
    },
};

Vue.use(ApiPlugin);
