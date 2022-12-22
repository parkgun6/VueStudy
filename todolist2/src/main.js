import { createApp } from 'vue';
import App from './App.vue';
import './style.css';
import router from './router';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

createApp(App).use(router).use(Vuetify).mount('#app');
