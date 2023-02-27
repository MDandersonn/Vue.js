import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

import BindTest from "@/views/lecture/bind/BindTest.vue"
import ClickEventTest from "@/views/lecture/clickEvent/ClickEventTest.vue"
import ComponentTest from "@/views/lecture/componentTest/ComponentTest.vue"
import EmitTestBoardGame from "@/views/lecture/emitTest/EmitTestBoardGame.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bind-test',
    name: 'BindTest',
    component: BindTest
  },
  {
    path: '/click-test',
    name: 'ClickEventTest',
    component: ClickEventTest
  },
  {
    path: '/component-test',
    name: 'ComponentTest',
    component: ComponentTest
  },
  {
    path: '/emit-test-board-game',
    name: 'EmitTestBoardGame',
    component: EmitTestBoardGame
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingStringView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingHtmlView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingInputView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingSelectView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingCheckboxView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingRadioView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingAttributeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingListView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingClassView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/lecture/01_databinding/DataBindingStyleView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/lecture/02_event/EventClickView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/lecture/02_event/EventChangeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/lecture/02_event/EventKeyView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
