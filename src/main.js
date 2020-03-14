import Vue from 'vue'
import App from './main.vue'

import '../modules/utils'

Vue.config.productionTip = false;

let app = new Vue({
    render: h => h(App),
}).$mount('#app');

window.app = app;
