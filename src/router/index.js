import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/product',
    component: Layout,
    name: 'Product',
    meta: { title: '项目管理', icon: 'list' },
    children: [
      {
        path: 'index',
        name: 'Product',
        component: () => import('@/views/product/index'),
        meta: { title: '项目清单', noCache: true, icon: 'list' }
      },
      {
        path: 'member',
        name: 'Product',
        component: () => import('@/views/product/member'),
        meta: { title: '项目成员', noCache: true, icon: 'people' }
      },
      {
        path: 'import',
        component: () => import('@/views/product/import'),
        name: 'import',
        hidden: true,
        meta: { title: '文件上传', icon: 'edit' }
      },
      {
        path: 'info',
        component: () => import('@/views/product/info'),
        name: 'info',
        hidden: true,
        meta: { title: '项目详情', icon: 'edit' }
      },
      {
        path: 'create',
        component: () => import('@/views/product/create'),
        name: 'CreateProduct',
        hidden: true,
        meta: { title: '新增项目', icon: 'edit' }
      }
    ]
  },
  {
    path: '/achieve',
    component: Layout,
    name: 'Achieve',
    meta: { title: '项目绩效', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Achieve',
        component: () => import('@/views/achieve/'),
        meta: { title: '项目绩效', icon: 'money' }
      },
      {
        path: '/statistics',
        name: 'Statistics',
        component: () => import('@/views/statistics/'),
        meta: { title: '绩效等级', noCache: true, icon: 'star' }
      },
      {
        path: 'import',
        component: () => import('@/views/achieve/import'),
        name: 'import',
        hidden: true,
        meta: { title: '文件上传', icon: 'edit' }
      },
      {
        path: 'create',
        component: () => import('@/views/achieve/create'),
        name: 'CreateAchieve',
        hidden: true,
        meta: { title: '项目绩效更新', icon: 'edit' }
      },
      {
        path: 'detail',
        component: () => import('@/views/achieve/detail'),
        name: 'detail',
        hidden: true,
        meta: { title: '绩效详情', icon: 'edit' }
      },
      {
        path: 'prize',
        component: () => import('@/views/achieve/prize'),
        name: 'prize',
        hidden: true,
        meta: { title: '奖金分配', icon: 'edit' }
      }
    ]
  },
  {
    path: '/config',
    component: Layout,
    name: 'Config',
    meta: {
      title: '配置管理',
      icon: 'nested'
    },
    children: [
      {
        path: 'product',
        component: () => import('@/views/config/product'), // Parent router-view
        name: 'product',
        meta: { title: '项目配置', icon: 'clipboard' },
        children: [
          {
            path: 'assess',
            component: () => import('@/views/config/product/assess'),
            name: 'assess',
            meta: { title: '评级标准', noCache: true, icon: 'star' }
          },
          {
            path: 'confirm',
            component: () => import('@/views/config/product/confirm'),
            name: 'confirm',
            meta: { title: '优先级评估', noCache: true, icon: 'exit-fullscreen' }
          },
          {
            path: 'mode',
            component: () => import('@/views/config/product/mode'),
            name: 'mode',
            meta: { title: '研发模式', noCache: true, icon: 'size' }
          },
          {
            path: 'type',
            component: () => import('@/views/config/product/type'),
            name: 'type',
            meta: { title: '项目类型', noCache: true, icon: 'guide' }
          },
          {
            path: 'stage',
            component: () => import('@/views/config/product/stage'),
            name: 'stage',
            meta: { title: '项目阶段', noCache: true, icon: 'documentation' }
          },
          {
            path: 'roles',
            component: () => import('@/views/config/product/roles'),
            name: 'roles',
            meta: { title: '项目角色', noCache: true, icon: 'eye' }
          }
        ]
      },
      {
        path: 'inspirit',
        component: () => import('@/views/config/inspirit'),
        name: 'inspirit',
        meta: { title: '绩效配置', icon: 'skill' },
        children: [
          {
            path: 'budget',
            component: () => import('@/views/config/inspirit/budget'),
            name: 'budget',
            meta: { title: '激励预算', icon: 'money' }
          },
          {
            path: 'radio',
            component: () => import('@/views/config/inspirit/radio'),
            name: 'radio',
            meta: { title: '激励应发', icon: 'size' }
          },
          {
            path: 'manage',
            component: () => import('@/views/config/inspirit/manage'),
            name: 'manage',
            meta: { title: '管理指数', icon: 'peoples' }
          },
          {
            path: 'hours',
            component: () => import('@/views/config/inspirit/hours'),
            name: 'hours',
            meta: { title: '工时指数', icon: 'zip' }
          },
          {
            path: 'duty',
            component: () => import('@/views/config/inspirit/duty'),
            name: 'duty',
            meta: { title: '责任指数', icon: 'drag' }
          },
          {
            path: 'solve',
            component: () => import('@/views/config/inspirit/solve'),
            name: 'solve',
            meta: { title: '问题解决', icon: 'skill' }
          },
          {
            path: 'overtime',
            component: () => import('@/views/config/inspirit/overtime'),
            name: 'overtime',
            meta: { title: '加班贡献', icon: 'message' }
          },
          {
            path: 'kpi',
            component: () => import('@/views/config/inspirit/kpi'),
            name: 'kpi',
            meta: { title: '绩效等级', noCache: true, icon: 'message' }
          }
        ]
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    name: 'System',
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'account',
        name: 'Account',
        component: () => import('@/views/system/account'),
        meta: { title: '账号管理', noCache: true, icon: 'user' },
        children: [
          {
            path: 'info',
            name: 'info',
            component: () => import('@/views/system/account/info'),
            meta: { title: '个人资料', noCache: true, icon: 'user' }
          },
          {
            path: 'log',
            name: 'Log',
            component: () => import('@/views/system/account/log'),
            meta: { title: '日志管理', noCache: true, icon: 'edit' }
          }
        ]
      },
      {
        path: 'organize',
        name: 'organize',
        component: () => import('@/views/system/organize'),
        meta: { title: '组织管理', noCache: true, icon: 'peoples' },
        children: [
          {
            path: 'department',
            name: 'department',
            component: () => import('@/views/system/organize/department'),
            meta: { title: '部门管理', noCache: true, icon: 'tree-table' }
          },
          {
            path: 'level',
            name: 'level',
            component: () => import('@/views/system/organize/level'),
            meta: { title: '职级管理', noCache: true, icon: 'tree' }
          },
          {
            path: 'job',
            name: 'job',
            component: () => import('@/views/system/organize/job'),
            meta: { title: '岗位管理', noCache: true, icon: 'tree' }
          },
          {
            path: 'employee',
            name: 'employee',
            component: () => import('@/views/system/organize/employee'),
            meta: { title: '员工信息', noCache: true, icon: 'user' }
          },
          {
            path: 'employee/create',
            component: () => import('@/views/system/organize/employee/create'),
            name: 'CreateEmployee',
            hidden: true,
            meta: { title: '增加员工信息', icon: 'edit' }
          }
        ]
      }
    ]
  },
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: '在线文档', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
