import Vue from 'vue'
import Router from 'vue-router'
import UserManage from './views/UserManage.vue'
import Main from './views/Main.vue'

Vue.use(Router)

const router = new Router({
    // mode: 'history',
    linkActiveClass:'active',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: () => import('./views/Login.vue')
        },
        {
            path: '/',
            name: 'main',
            component: Main,
            meta: {
                requiresAuth:true
            },
            children:[
                {
                    path: '/',
                    name: 'Welcome',
                    component:() => import('./views/Welcome.vue')
                },
                {
                    path: '/userManage',
                    name: 'UserManage',
                    component:UserManage
                },

            ]
        },

    ]
});

router.beforeEach((to, from, next) => {
    var token = localStorage.getItem('_token');
    if (to.matched.some(record => record.meta.requiresAuth)&&(!token || token === null)) {
        next({
            path: '/login',
            query: {
                redirect:to.fullPath
            }
        })
    } else {
        next()
    }
});

export default router;
