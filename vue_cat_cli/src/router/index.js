import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WatcherView from '../views/WatcherView.vue'
import FilterView from '../views/FilterView.vue'
import ComponentView from '../views/ComponentView.vue'

Vue.use(VueRouter)

const routes = [
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
    path: '/watcher',
    name: 'watcher',
    component: WatcherView
  },
  {
    path: '/filter',
    name: 'filter',
    component: FilterView
  },
  {
    path: '/component',
    name: 'component',
    component: ComponentView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
