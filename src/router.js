import Vue from 'vue';
import VueRouter from 'vue-router';
import Skill from './components/Skill.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Skill },
  { path: '/skill', component: Skill },
  { path: '/projects', component: Projects },
  { path: '/experience', component: Experience }
];

const router = new VueRouter({
  routes 
});

export default router;
