<template>
  <v-footer class="grey darken-2 white--text">
    <div class="social">
      <a class="white--text" href="http://github.com/stanzhai" target="_blank">Follow @stanzhai</a>
    </div>
  	<div class="copy">© 2017 <a class="white--text" href="http://zhaishidan.cn">Stan Zhai</a></div>
  </v-footer>
</template>

<style lang="stylus">
  .footer
    position: relative
    
  .copy
    text-align: left
    padding-left: 1rem
      
  .social
    position: absolute !important
    display: flex !important
    align-items: center
    top: 0px
    right: 25px
    height: 100%
    
  @media screen and (max-width: 768px)
    .copy
      display: none
</style>