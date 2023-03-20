import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'
import GridListPage from '../views/GridListPage.vue'
import Breakpoints from '../views/Breakpoints.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem
  },
  {
    path: '/grid-list-page',
    name: 'GridListPage',
    component: GridListPage
  },
  {
    path: '/breakpoints',
    name: 'Breakpoints',
    component: Breakpoints
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
