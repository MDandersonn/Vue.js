import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'
import TodoView2 from '../views/TodoView2.vue'
import TodoView3 from '../views/TodoView3.vue'
import ApiView from '../views/ApiView.vue'
import SingleFileComponenetView from '../views/01_SingleFileComponentView.vue'
import PropsView from '../views/02_PropsView.vue'
import EmitView from '../views/03_EmitView.vue'
import SlotView from '../views/04_SlotView.vue'
import SlotView1 from '../views/04_SlotView1.vue'
import SlotView2 from '../views/04_SlotView2.vue'

import TodoView01 from '../views/05_TodoView01.vue'

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
  {
    path: '/singlefilecomponent',
    name: 'singlefilecomponent',
    component: SingleFileComponenetView
  },
  {
    path: '/props',
    name: 'props',
    component: PropsView
  },
  {
    path: '/emit',
    name: 'emit',
    component: EmitView
  },
  {
    path: '/slot',
    name: 'slot',
    component: SlotView
  },
  {
    path: '/slot1',
    name: 'slot1',
    component: SlotView1
  },
  {
    path: '/slot2',
    name: 'slot2',
    component: SlotView2
  },
  {
    path: '/todo01',
    name: 'todo01',
    component: TodoView01
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
