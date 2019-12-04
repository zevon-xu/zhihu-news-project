import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

// import 'common/stylus/index.styl'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
