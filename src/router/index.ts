import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/container',
    component: () => import('../components/container/src/index.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/home.vue')
      },
      {
        path: '/chooseIcon',
        component: () => import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea',
        component: () => import('../views/chooseArea/index.vue')
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router