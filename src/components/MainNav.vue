<template>
  <header>
    <v-navbar fixed>
  	  <v-btn floating v-sidebar:mainsidebar="" class="side-icon hidden-md-and-up transparent z-depth-0" ripple>
  	    <v-icon>menu</v-icon>
      </v-btn>
      <div class="navbar__side-title">
        <h1 class="text-xs-center text-md-left" v-text="title"></h1>
        <span class="hidden-md-and-down" v-html="subTitle"></span>
      </div>
    </v-navbar>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        subTitle: 'test'
      }
    },

  	props: {
  	  title: String
  	}
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  header
    .navbar
      align-items: center
      color: #fff
      
      .side-icon
        margin: 0 1rem
      
      &__side-title
        display: flex
        flex: 1
        align-items: space-between
        justify-content: space-between
        flex-direction: column
        margin: 0 4rem
        
        @media screen and (max-width: $grid-breakpoints.md)
          margin: 0 4rem 0 0
        
        span
          font-weight: 200
          font-size: 1.7rem
          max-width: 600px
          line-height: 1.7rem
      
      h1
        letter-spacing: 1px
        color: #fff
        font-size: 3.5rem
        font-weight: 400
        margin: 0
        word-break: break-word
        
  @media screen and (max-width: $grid-breakpoints.md)
    header
      .navbar
        height: 50px
        
        h1
          font-size: 4vw
          
    #app
      padding-top: 50px
</style>