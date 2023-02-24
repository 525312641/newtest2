import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = true

console.log('t2222est22')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
