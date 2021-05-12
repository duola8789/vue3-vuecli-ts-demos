import {createRouter, createWebHistory} from 'vue-router';

import routesConfig from '@/router/config';
const routes = routesConfig;

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_BASE_URL),
  routes
});

export default router;
