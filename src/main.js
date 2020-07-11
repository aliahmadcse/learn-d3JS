import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// loading libraries
window.Popper = require('popper.js').default;
window.jQuery = global.$ = require('jquery');
require('bootstrap');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
