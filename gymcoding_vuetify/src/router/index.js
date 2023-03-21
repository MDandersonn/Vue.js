import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import GridSystem from '../views/GridSystem.vue'
import GridListPage from '../views/GridListPage.vue'
import Breakpoints from '../views/Breakpoints.vue'
import Typography from '../views/Typography.vue'

import SignIn from '@/views/authentication/SignIn.vue'
import SignUp from '@/views/authentication/SignUp'
import ProductList from '@/layouts/page/ProductList'
import DefaultLayout from '@/layouts/default/index.vue'
import PageLayout from '@/layouts/page/index.vue'
import AuthenticationLayout from '@/layouts/authentication/index.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    children:[
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
      {
        path: '/typography',
        name: 'Typography',
        component: Typography
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: () => import(
          /* webpackChunkName: "views-buttons" */
          '@/views/Buttons'
        )
      },
      {
        path: '/icons',
        name: 'Icons',
        component: () => import(
          /* webpackChunkName: "views-icons" */
          '@/views/Icons'
        )
      },
      {
        path: '/tables',
        name: 'Tables',
        component: () => import(
          /* webpackChunkName: "views-icons" */
          '@/views/Tables'
        )
      },
      {
        path: '/forms',
        name: 'Forms',
        component: () => import(
          /* webpackChunkName: "views-icons" */
          '@/views/Forms'
        )
      },
      {
        path: '/authentication',
        component: AuthenticationLayout,
        children:[
          {
            path: '/sign-in',
            name: 'SignIn',
            component: SignIn
          },
          {
            path: '/sign-up',
            name: 'SignUp',
            component: SignUp
          },

        ]
      },
      {
        path: '/page',
        component: PageLayout,
        children:[
          {
            path: '/product-list',
            name: 'ProductList',
            component: ProductList
          },

        ]
      }
    ]
  },
 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
