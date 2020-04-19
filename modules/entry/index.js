import Vue from 'vue'
import App from './index.vue'

Vue.config.productionTip = false;

let app = new Vue({
    render: h => h(App),
}).$mount('#app');

window.app = app;
