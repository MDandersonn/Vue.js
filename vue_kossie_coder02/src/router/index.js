import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import TodoView2 from '../views/TodoView2.vue'
import TodoView3 from '../views/TodoView3.vue'
import ApiView from '../views/ApiView.vue'
Vue.use(VueRouter)//뷰가 뷰라우터를 사용한다는 의미

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
    path: '/todo',
    name: 'todo',
    component: TodoView
  },
  {
    path: '/todo2',
    name: 'todo2',
    component: TodoView2
  },
  {
    path: '/todo3',
    name: 'todo3',
    component: TodoView3
  },
  {
    path: '/api',
    name: 'api',
    component: ApiView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
