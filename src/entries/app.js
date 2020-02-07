import Vue from 'vue'
import App from '../views/app.vue'
import router from '../router'
import store from '../store'

import '../utils'
import '../development'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
