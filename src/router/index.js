import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import(/* webpackChunkName: "about" */ '../views/Index'),
    children:[
      {
        path:'/',
        name:'首页',
        class:'el-icon-s-home',
        component:()=>import('../views/Home')
      },
      {
        path:'/listTag',
        name:'标签',
        class:'el-icon-collection-tag',
        component:()=>import('../views/ListTag')
      },
      {
        path:'/about',
        name:'关于',
        class:'el-icon-s-operation',
        component:()=>import('../views/About')
      },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
