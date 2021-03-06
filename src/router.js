import Vue from 'vue'
import Router from 'vue-router'

function route (path, view) {
  return {
    path: path,
    component: require(`./views/${view}View.vue`)
  }
}

Vue.use(Router)

const router = new Router({
  base: __dirname,
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/', 'Index'),
    route('/skills', 'Skills'),
    route('/experience', 'Experience'),
    route('/projects', 'Projects'),
    route('/education', 'Education'),
    { path: '*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
    if (typeof ga !== 'undefined') {
        ga('set', 'page', to.path)
        ga('send', 'pageview')
    }
    next()
})

export default router
