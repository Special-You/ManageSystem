import Vue from 'vue'
import Router from 'vue-router'
import UserManage from './views/UserManage.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main,
            children:[
                {
                    path: '/userManage',
                    name: 'UserManage',
                    component: UserManage
                },
                {
                    path: '/inOutManage',
                    name: 'InOutManage',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ './views/InOutManage.vue')
                },
                // {
                //     path: '/control',
                //     name: 'control',
                //     component: () => import('./views/Control.vue')
                // }
            ]
        },

    ]
})
