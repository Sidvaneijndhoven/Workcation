import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'; 
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css'; 

const app = createApp(App);

// Use the Toast plugin
app.use(Toast);

app.use(router).mount('#app')