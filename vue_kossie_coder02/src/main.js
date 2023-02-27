import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false

//글로벌컴퍼넌트를 쓰려면 뷰인스턴스가 생성되기전에 아래와같이 생성한다.
// Vue.component('tagname',{

// })

//뷰 인스턴스 생성
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
// app이라는 id를 가진 태그안으로 App.vue가 들어가는것.
