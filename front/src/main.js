import { createApp } from 'vue'
import App from './App.vue'

import Mitt from 'mitt';

const emitter = Mitt();

const app = createApp(App);

app.config.globalProperties.emitter = emitter;

app.mount('#app');
