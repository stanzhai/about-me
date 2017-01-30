<template>
  <v-navbar>
    <v-navbar-logo class="hidden-sm-and-down" v-text="title"></v-navbar-logo>
  </v-navbar>
</template>

<script>
  export default {
  	props: {
  	  title: String
  	}
  }
</script>