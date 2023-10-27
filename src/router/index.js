import { createRouter, createWebHashHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      title: '404'
    }
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    meta: {
      title: '401'
    }
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '仪表板', icon: 'House', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '帐户管理', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '操作紀錄', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '報表', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '管理員', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '管理員組', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '個人中心', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '系統日誌', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '網站管理', icon: 'Tools', roles: ['admin'] }
      },
      // {
      //   path: '/menu',
      //   name: 'Menu',
      //   component: () => import('@/views/menu/index.vue'),
      //   meta: { title: '菜单', icon: 'Notification', roles: ['admin', 'editor'] },
      //   redirect: '/menu2',
      //   children: [
      //     {
      //       path: '/menu1',
      //       name: 'Menu1',
      //       component: () => import('@/views/menu/menu10.vue'),
      //       meta: { title: '菜单1', roles: ['admin', 'editor'] },
      //       redirect: '/menu1-2',
      //       children: [
      //         {
      //           path: '/menu1-1',
      //           component: () => import('@/views/menu/menu11.vue'),
      //           name: 'Menu1-1',
      //           meta: { title: '菜单1-1', roles: ['admin'] }
      //         },
      //         {
      //           path: '/menu1-2',
      //           component: () => import('@/views/menu/menu12.vue'),
      //           name: 'Menu1-2',
      //           meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
      //         }
      //       ]
      //     },
      //     {
      //       path: '/menu2',
      //       component: () => import('@/views/menu/menu2.vue'),
      //       name: 'Menu2',
      //       meta: { title: '菜单2', roles: ['admin', 'editor'] }
      //     }
      //   ]
      // },
      // {
      //   path: '/star',
      //   component: () => import('@/views/star/index.vue'),
      //   name: 'Star',
      //   meta: { title: '图表', icon: 'Histogram', roles: ['admin', 'editor'] }
      // },
      // {
      //   path: '/xueyue',
      //   component: () => import('@/views/xueyue/index.vue'),
      //   name: 'Xueyue',
      //   meta: { title: '雪月', icon: 'Flag', roles: ['admin'] }
      // }
    ]
  }
]

export const asyncRoutes = []

export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
