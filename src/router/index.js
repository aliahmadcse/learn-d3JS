import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import BarChart from '../views/BarChart.vue';
import CircularChart from '@/views/CircularChart.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () =>
        //     import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
        path: '/barchart',
        name: 'Barchart',
        component: BarChart
    },
    {
        path: '/circularchart',
        name: 'CircularChart',
        component: CircularChart
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
