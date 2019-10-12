import Vue from '@/common/vue'
import App from './App'

console.log('index page')
console.log('i use vue')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
