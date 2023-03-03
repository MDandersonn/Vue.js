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
// 운영하는곳에 올리는 파일은 index.js하고 여러 자바스크립트, css파일만 올라감. vue파일들은 js파일로 컴파일이된다.
// chunk-vendor.js에는 우리가개발한 js말고 우리가 참조하고있는 외부js 스크립트코드가 여기로 다 들어간다.
// app.js파일은 HomeView형태로 라우트를 만들어준애들은 이 파일로 다 들어감(자바스크립트형태로 컴파일된 후)
// webpackChunkName="aa"의 이름에 따라서 f12-js탭 에   그 이름대로  aa.js 파일로 만들어짐
//webpackPrefetch:true 하면 size가 prefetch cache 되는데 prefetch란 화면이 로딩되자마자 등록된 js 리소스를 당장은 쓸것은아닌데,
//미래에 사용가능성이 높은 리소스들을 prefetch라고 해서 등록을해주면 브라우저 캐시에다가 저장해줌.
//as="~": 스크립트타입
//캐시에저장됐던 js파일을 접속하는순간 캐시로부터 가져와 사용한다.
// 일단 , 캐시에만저장되어있지 클라이언트가 사용할수있도록 내려받진않은형태이다.
//이렇게 하면 굉장히 빨리 접속이 가능해진다.
//webpackPrefetch를 생략한경우  : 접속을 누른 순간에 서버에서 받아옴 ( 느림)
//100%들어가는 화면은 홈화면과 같은 라우터방식으로 설정 => app.js에 포함되어서 무조건 받아옴.
// 들어갈 가능성이 높은경우 webpackPrefetch:true로 설정(미리받아올필요있는경우)




  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/string',
    name: 'DataBindingStringView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/01_DataBindingStringView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/html',
    name: 'DataBindingHtmlView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/02_DataBindingHtmlView.vue')
  },
  // webpackChunkName이 같다면 순서와상관없이 아무path에 접근하면 같은이름인 webpackChunk는 다 작동해서 한번에 다 받아진다
  //이름을 그룹핑해서 같이 받아질수있도록 잘 판단해야한다. 
  //같이사용하는 부류들은 같이 그룹핑하는게 효율적일것.

  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/input',
    name: 'DataBindingInputView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/03_DataBindingInputView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/select',
    name: 'DataBindingSelectView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/04_DataBindingSelectView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/checkbox',
    name: 'DataBindingCheckboxView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/05_DataBindingCheckboxView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/radio',
    name: 'DataBindingRadioView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/06_DataBindingRadioView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/attribute',
    name: 'DataBindingAttributeView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/07_DataBindingAttributeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/list',
    name: 'DataBindingListView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/08_DataBindingListView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/class',
    name: 'DataBindingClassView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/09_DataBindingClassView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/databinding/style',
    name: 'DataBindingStyleView',
    component: () => import(
      /* webpackChunkName: "databinding", webpackPrefetch:true */ '@/views/01_databinding/10_DataBindingStyleView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/click',
    name: 'EventClickView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/01_EventClickView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/change',
    name: 'EventChangeView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/02_EventChangeView.vue')
  },
  {//해당 path를 사용자가 입력하면 경로의 컴포넌트를 갖고와서 App.vue의 router-view부분에 넣는다.
    path: '/event/key',
    name: 'EventKeyView',
    component: () => import(
      /* webpackChunkName: "event", webpackPrefetch:true */ '@/views/02_event/03_EventKeyView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
