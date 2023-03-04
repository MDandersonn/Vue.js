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
import TodoView02 from '../views/06_TodoView02.vue'
import TodoView03 from '../views/07_TodoView03.vue'
import TodoView04 from '../views/08_TodoView04.vue'
import TodoView05 from '../views/09_TodoView05.vue'

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
  {
    path: '/todo02',
    name: 'todo02',
    component: TodoView02
  },
  {//state, mutation사용
    path: '/todo03',
    name: 'todo03',
    component: TodoView03
  },
  {//actions사용
    path: '/todo04',
    name: 'todo04',
    component: TodoView04
  },
  {//module사용
    path: '/todo05',
    name: 'todo05',
    component: TodoView05
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
