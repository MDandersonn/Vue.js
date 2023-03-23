import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todo',
    name: 'todo',
    component: () => import(/* webpackChunkName: "about11" */ '../views/13_todoListView.vue')
  },
  {
    path: '/style',
    name: 'style',
    component: () => import(/* webpackChunkName: "about10" */ '../views/12_styleView.vue')
  },
  {
    path: '/ui3',
    name: 'ui3',
    component: () => import(/* webpackChunkName: "about1" */ '../views/11_ui3View.vue')
  },
  {
    path: '/tab',
    name: 'tab',
    component: () => import(/* webpackChunkName: "about2" */ '../views/10_tabView.vue')
  },
  {
    path: '/crudtable',
    name: 'crudtable',
    component: () => import(/* webpackChunkName: "about3" */ '../views/09_crudTableView.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about4" */ '../views/08_tableView.vue')
  },
  {
    path: '/ui2',
    name: 'ui2',
    component: () => import(/* webpackChunkName: "about5" */ '../views/07_ui2View.vue')
  },
  {
    path: '/group',
    name: 'group',
    component: () => import(/* webpackChunkName: "about6" */ '../views/06_groupView.vue')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about7" */ '../views/04_formView.vue')
  },
  {
    path: '/appbars',
    name: 'appbars',
    component: () => import(/* webpackChunkName: "about8" */ '../views/03_appBarsView.vue')
  },
  {
    path: '/application',
    name: 'application',
    component: () => import(/* webpackChunkName: "about9" */ '../views/02_applicationView.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: MainView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ui',
    name: 'ui',
    component: () => import(/* webpackChunkName: "about" */ '../views/01_uiView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
