import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/MainView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "about" */ '../views/04_formView.vue')
  },
  {
    path: '/appbars',
    name: 'appbars',
    component: () => import(/* webpackChunkName: "about" */ '../views/03_appBarsView.vue')
  },
  {
    path: '/application',
    name: 'application',
    component: () => import(/* webpackChunkName: "about" */ '../views/02_applicationView.vue')
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
