import Vue from 'vue';
import App from './App';

import router from './router/router';
import store from './store/store';

const app = new Vue({
    el: '#app',
    store,
    router: router,
    render: (h) => h(App),
});

export { app, router };
