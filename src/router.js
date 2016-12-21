import Vue from 'vue';
import VueRouter from 'vue-router';
import Skill from './components/Skill.vue'
import Project from './components/Project.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Skill },
  { path: '/skill', component: Skill },
  { path: '/project', component: Project }
];

const router = new VueRouter({
  routes 
});

export default router;
