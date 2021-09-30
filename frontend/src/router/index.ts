import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import PageNotFound from '../views/404.vue';
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
	{
		path: '/404',
		name: 'Not-found',
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
