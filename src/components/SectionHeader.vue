<template>
  <h2 class="section-header secondary--text primary--after" v-bind:style="style">
    <slot/>
  </h2>
</template>

<script>
  export default {
    props: {
      first: Boolean
    },

    computed: {
      styles () {
        let styles = {}

        if (this.first) {
          styles['margin-top'] = 0
        }

        return styles
      }
    }
  }
</script>

<style lang="stylus">
  .section-header
    letter-spacing: 2px
    text-align: left !important
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    position: relative
    padding-bottom: .5rem
    display: flex
    align-items: center
    
    &:after
      content: ''
      position: absolute
      left: 0
      bottom: 0
      width: 100px
      height: 3px
</style>