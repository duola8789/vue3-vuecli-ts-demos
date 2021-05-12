import {createApp} from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import App from './App.vue';
import router from './router';
import store from './store';

const app = createApp(App);

app
  .use(ElementPlus)
  .use(router)
  .use(store)
  .mount('#app');

app.config.globalProperties.$sayHello = () => {
  alert('Hello');
};