import Vue from 'vue'
import App from './page2.vue'

Vue.config.productionTip = false;

let app = new Vue({
    render: h => h(App),
}).$mount('#app');

window.app = app;
