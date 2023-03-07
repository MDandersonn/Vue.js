import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import componentComponent from "@/components/componentComponent.vue"
Vue.config.productionTip = false
// 전역필터
Vue.filter('localeNum1',function(val){
  return val.toLocaleString()
})

// Vue.component('MyComponent',{
//   template:'<p>전역컴퍼넌트</p>'
// })//왜안되지?

Vue.component('MyComponent',componentComponent)

// var myComponent={
//   template:'<p>Mycomponent</p>'
// }//왜 안되지?



new Vue({
  router,
  store,
  render: h => h(App),
  // components:{
  //   'my-component':myComponent
  // }
}).$mount('#app')
