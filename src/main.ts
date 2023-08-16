import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Elicons from '@element-plus/icons-vue';


const app = createApp(App)
Object.keys(Elicons).forEach((key) => {
  app.component(key, Elicons[key as keyof typeof Elicons]);
});

app.use(router)
  
app.mount('#app');