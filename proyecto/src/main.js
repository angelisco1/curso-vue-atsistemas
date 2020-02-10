import Vue from 'vue'
import App from './App.vue'
import './componentes-globales'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
