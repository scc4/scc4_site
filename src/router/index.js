import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/Scc4.vue'),
        meta: { sel: 0 }
    },
    {
        path: '/',
        name: 'home',
        component: () => import('../components/Scc4.vue'),
        meta: { sel: 0 }
    },
    {
        path: '/portalpostal',
        name: 'portalpostal',
        component: () => import('../components/PortalPostal.vue'),
        meta: { sel: 1 }
    },
    {
        path: '/boxcubo',
        name: 'boxcubo',
        component: () => import('../components/Boxcubo.vue'),
        meta: { sel: 2 }
    },
    {
        path: '/contato',
        name: 'contato',
        component: () => import('../components/Contato.vue'),
        meta: { sel: 3 }
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});



export default router
