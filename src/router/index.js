import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },



  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '信息查询', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '任务管理', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '用户管理', icon: 'tree' }
      },
      {
        path: 'work',
        name: 'Work',
        component: () => import('@/views/table/work'),
        meta: { title: '我的任务', icon: 'form' }
      },
      {
        path: 'mywork',
        name: 'MyWork',
        component: () => import('@/views/table/mywork'),
        meta: { title: '待办', icon: 'form' }
      },
      {
        path: 'donework',
        name: 'Donework',
        component: () => import('@/views/table/donework'),
        meta: { title: '已办', icon: 'form' }
      }
    ]
  },

  {
    path: '/form',
    redirect: '/form/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '个人中心', icon: 'form'}
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
//  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
// export const asyncRouterMap = [
//   {
//     path: '/form',
//     component: Layout,
//     children: [
//       {
//         path: 'index',
//         name: 'Form',
//         component: () => import('@/views/form/index'),
//         meta: { title: '个人中心', icon: 'form',role: ['admin','super_editor'] }
//       }
//     ]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ];
