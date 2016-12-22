<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <test-header></test-header>
    <img src="./assets/favicon.png" />
    <p>
      <router-link to="/skill">Skill</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/experience">Experience</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    'test-header': Header
  },
  data () {
    return {
      msg: 'Good to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
