<template>
  <v-sidebar fixed ripple router unshift v-bind:items="items">
  	<div class="header" slot="top">
      <router-link to="/" class="sidebar__logo">
        <img src="public/head.jpeg" height="128" width="128" />
        <div class="name">Stan Zhai</div>
      </router-link>
      <div class="sidebar__links">
        <a href="https://github.com/stanzhai" target="_blank">
          <img src="public/github.png" alt="GitHub" />
        </a>
        <a href="http://blog.zhaishidan.cn" target="_blank">
          <img src="public/blog.png" alt="Blog" />
        </a>
        <a href="mailto:mail@zhaishidan.cn">
          <img src="public/mail.png" alt="Mail" />
        </a>
      </div>
      <div>View source?</div>
      <div class="gitter">
        Find the source code at 
        <a href="https://github.com/stanzhai/about-me" target="_blank">GitHub</a>
      </div>
  	</div>
  </v-sidebar>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { divider: true, light: true },
          { header: 'Core Info' },
          { href: '/skills', title: 'Skills', action: 'layers' },
          { href: '/experience', title: 'Experience', action: 'verified_user' },
          { href: '/projects', title: 'Projects', action: 'screen_share' },
          { href: '/education', title: 'Education', action: 'school' },
          { divider: true, light: true },
          { header: 'Additional Info' },
          { title: 'Examples', action: 'web', disabled: true },
        ]
      }
    }
  }
</script>

<style lang="stylus">
  @import '../stylus/settings/_variables'
  
  .sidebar
    background: $grey.darken-3
    
    &__links
      margin: 1rem
      display: flex
      justify-content: center
      align-items: center
      
      a
        color: #fff
        text-align: center
        text-decoration: none
        margin: 0 .5rem
        
        img
          height: 25px
          
        i
          padding: 0
  
  .header
    text-align: center
    margin-top: 32px
    color: #fff

    .name
      font-weight: bold
      font-size: 20px
        
    .sidebar__logo
      display: block
      position: relative
      margin-bottom: 20px
      text-decoration: none
      
      img
        border-radius: 10px
    
    a
      color: #fff
      
    .gitter
      margin-bottom: 20px
        
  .sidebar__item-header
    color: #fff
    
  .sidebar__item
    color: #fff

  .list__tile--active
    background: rgba(0,0,0,0.12)
</style>