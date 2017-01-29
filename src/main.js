if (process.env.NODE_ENV === 'development') {
  require('./index.html');
}

import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';

Vue.use(Vuetify);
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted () {
    this.$vuetify.init();
  }
});
