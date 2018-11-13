// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import index from './store/index'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

let debug

if (process.env.NODE_ENV == 'production') {
  debug = {
    enabled: true,
    trace: false,
    sendHitTask: true
  }
}

Vue.use(VueAnalytics, {
  id: 'UA-129141159-1',
  router,
  debug
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: index,
  router,
  components: { App },
  template: '<App/>'
})
