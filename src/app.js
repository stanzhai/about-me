if (process.env.NODE_ENV === 'development') {
  require('./index.template.html');
}

import Vue from 'vue'
import Vuetify from 'vuetify'
import Components from './components'
import router from './router'
import App from './App.vue'

Vue.use(Vuetify)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})