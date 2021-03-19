import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import * as numeral from 'numeral'
import * as FormatDate from 'moment'
import store from './store'

Vue.directive('BigNumbers', {
  bind (el, binding) {
    if (Math.abs(binding.value) >= 0 && Math.abs(binding.value) < 1000) {
      el.innerHTML = binding.value
    }
    if (Math.abs(binding.value) >= 1000 && Math.abs(binding.value) < 1000000) {
      el.innerHTML = Math.sign(binding.value) * ((Math.abs(binding.value) / 1000).toFixed(2)) + 'K'
    }
    if (Math.abs(binding.value) >= 1000000 && Math.abs(binding.value) < 1000000000) {
      el.innerHTML = Math.sign(binding.value) * ((Math.abs(binding.value) / 1000000).toFixed(1)) + 'M'
    }
    if (Math.abs(binding.value) >= 1000000000 && Math.abs(binding.value) < 1000000000000) {
      el.innerHTML = Math.sign(binding.value) * ((Math.abs(binding.value) / 1000000000).toFixed(0)) + 'B'
    }
  }
})
Vue.filter('formatNumber', function (value) {
  return numeral(value).format('0,0')
})
Vue.filter('CurrentyFormat', function (value) {
  return numeral(value).format('0,0.00')
})
Vue.filter('formatDate', function (value) {
  let givenDate = ''
  givenDate = String(value).replace(/:/g, '')
  return FormatDate(givenDate.replace(/[\s//]/g, ''), 'YYYYMMDDhmmss').fromNow()
})
Vue.filter('ReleaseDateFormat', function (value) {
  return FormatDate(value).format('ll')
})

Vue.prototype.$numeral = numeral
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#container')