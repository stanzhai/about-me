if (process.env.NODE_ENV === 'development') {
  require('./index.template.html');
}

import Vue from 'vue'
import Vuetify from 'vuetify'
import Components from './components'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from './App.vue'

sync(store, router)

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

/*
new Vue(Vue.util.extend({
  router,
  store
}, App))
*/
