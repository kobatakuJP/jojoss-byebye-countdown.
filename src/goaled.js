import Vue from 'vue'
import ByeByePage from './ByeByePage.vue'

Vue.config.productionTip = false
console.log("")

new Vue({
    render: h => h(ByeByePage),
  }).$mount('#app')