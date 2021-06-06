import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import MapView from '../views/Map.vue';
import LoginView from '../views/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/map',
    name: 'Map',
    component: MapView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
