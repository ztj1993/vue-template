import Vuex from 'vuex'

const VuexPlugin = {
    install: (Vue, options = {}) => {
        Vue.use(Vuex);
        Vue.prototype.$store = new Vuex.Store(options);
    },
};

export default VuexPlugin;
