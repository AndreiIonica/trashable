import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Account from '../views/Account.vue';
import Landing from '../views/Landing.vue';
import Main from '../views/Main.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Landing,
	},
	{
		path: '/main',
		name: 'Main',
		component: Main,
	},
	{
		path: '/account',
		name: 'Account',
		component: Account,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
