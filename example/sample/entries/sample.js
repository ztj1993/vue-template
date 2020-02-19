import Vue from 'vue'
import App from '../pages/sample.vue'

import '../utils'

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
