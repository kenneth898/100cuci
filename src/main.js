import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Import your router instance
import i18n from './i18n'; // Import your i18n instance

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Create and mount the app with router and i18n
createApp(App)
	.use(router)
	.use(i18n)
	.mount('#app');
