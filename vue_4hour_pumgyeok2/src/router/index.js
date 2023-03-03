import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingStringView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingHtmlView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingInputView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingSelectView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingCheckboxView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingRadioView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingAttributeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingListView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingClassView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/DataBindingStyleView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/EventClickView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/EventChangeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/EventKeyView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
