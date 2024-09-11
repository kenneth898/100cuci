import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

createApp(App)
	.use(router)
	.use(i18n)
	.use(store)
	.mount('#app');
