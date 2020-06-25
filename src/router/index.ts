import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import NavHome from '../views/home/nav-home.vue';
import Example from './example';
import About from './about';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'navHome',
        component: NavHome,
        redirect: '/example',
        children: [
            ...Example,
        ],
    },
    ...About,
];

const router = new VueRouter({
    routes,
});

export default router;
