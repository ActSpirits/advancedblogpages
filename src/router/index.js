import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'


const routes = [
    {

        path: '/',
        name: '首页',
        component: () => import(/* webpackChunkName: "about" */ '../views/Index'),
        children: [
            {
                path: '/',
                name: '首页',
                class: 'el-icon-s-home',
                component: () => import('../views/Home')
            },
            {
                path: '/listTag',
                name: '标签',
                class: 'el-icon-collection-tag',
                component: () => import('../views/ListTag')
            },
            {
                path: '/about',
                name: '关于',
                class: 'el-icon-s-operation',
                component: () => import('../views/About')
            },
        ],
    },
    {
        path: '/login',
        name: '登录',
        class: 'el-icon-user',
        component: () => import('../views/Login')
    },
    {
        path: '/register',
        name: '注册',
        class: 'el-icon-news',
        component: () => import('../views/Register')
    },
    {
        path: '/getBlogById',
        name: "博客详情",
        component: () => import('../views/Blog')
    }

]

const router = createRouter({
    // history: createWebHashHistory(),
    // 修改配置 使得访问的根目录不再带'#/'
    history: createWebHistory(),
    routes
})

export default router
