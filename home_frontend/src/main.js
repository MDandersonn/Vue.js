import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import GlobalComponent from "@/components/lecture/componentTest/GlobalComponent.vue"

Vue.config.productionTip = false

// global-component 커스텀 태그 등록
Vue.component(GlobalComponent.name, GlobalComponent)//name이 "GlobalComponent" 라서 아래와 같은 얘기임
// Vue.component("GlobalComponent", GlobalComponent)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
