<template>
  <v-sidebar fixed ripple router unshift v-bind:items="items">
  	<div class="vuetify" slot="top">
      <router-link to="/about" class="sidebar__logo" />
      <v-divider light />
  	</div>
  </v-sidebar>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          { header: 'Core Documentation' },
          { href: '/', title: 'About', action: { icon: 'question_answer' } },
          { href: '/test', title: 'Test', action: 'fast_forward' },
          { href: '/server-side-rendering', title: 'Server Side Rendering', action: 'cloud_circle' },
          { href: '/event-bus', title: 'Event Bus', action: 'device_hub' },
          { href: '/layouts', title: 'Layouts', action: 'devices' },
          {
            title: 'Components',
            action: 'widgets',
            group: '/components',
            items: [
              { href: '/components/alerts', title: 'Alerts' },
              { href: '/components/breadcrumbs', title: 'Breadcrumbs' },
              { href: '/components/buttons', title: 'Buttons' },
              { href: '/components/cards', title: 'Cards' },
              { href: '/components/chips', title: 'Chips' },
              { href: '/components/collapsible', title: 'Collapsible' },
              { href: '/components/dividers', title: 'Dividers', disabled: true },
              { href: '/components/dropdowns', title: 'Dropdowns' },
              { href: '/components/footer', title: 'Footer' },
              { href: '/components/forms', title: 'Forms' },
              { href: '/components/icons', title: 'Icons' },
              { href: '/components/lists', title: 'Lists', action: { icon: 'update', class: 'success--text' } },
              { href: '/components/modals', title: 'Modals' },
              { href: '/components/navbar', title: 'Navbars' },
              { href: '/components/pagination', title: 'Pagination' },
              { href: '/components/parallax', title: 'Parallax' },
              { href: '/components/progress-circular', title: 'Progress Circular' },
              { href: '/components/progress-linear', title: 'Progress Linear', action: { icon: 'fiber_new', class: 'success--text' } },
              { href: '/components/sidebar', title: 'Sidebars', action: { icon: 'update', class: 'success--text' } },
              { href: '/components/slider', title: 'Sliders' },
              { href: '/components/tabs', title: 'Tabs' }
            ]
          },
          {
            title: 'Directives',
            action: 'polymer',
            group: '/directives',
            items: [
              { href: '/directives/badges', title: 'Badges' },
              { href: '/directives/ripples', title: 'Ripples' },
              { href: '/directives/tooltips', title: 'Tooltips' }
            ]
          },
          {
            title: 'Functions', 
            action: 'functions',
            group: '/functions',
            items: [
              { href: '/functions/toasts', title: 'Toasts' }
            ]
          },
          {
            title: 'CSS', 
            action: 'brush',
            group: '/css',
            items: [
              { href: '/css/typography', title: 'Typography' },
              { href: '/css/content', title: 'Content' },
              { href: '/css/grid', title: 'Grid' },
              { href: '/css/colors', title: 'Colors' },
              { href: '/css/tables', title: 'Tables' },
            ]
          },
          {
            title: 'Helpers', 
            action: 'build',
            group: '/helpers',
            items: [
              { href: '/helpers/spacing', title: 'Spacing' },
              { href: '/helpers/alignment', title: 'Alignment' },
              { href: '/helpers/display', title: 'Display' }
            ]
          },
          { divider: true, light: true },
          { header: 'Additional Documentation' },
          { title: 'Optimization', action: 'flash_on', disabled: true },
          { title: 'Deployment', action: 'important_devices', disabled: true },
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
  
  .vuetify
    text-align: center
    margin-top: 16px
    color: #fff
        
    .sidebar__logo
      display: block
      position: relative
      margin-bottom: 16px
      text-decoration: none
      
      img
        height: 100px
    
    a
      color: #fff
      
    .gitter
      margin-bottom: 16px
        
  .sidebar__item-header
    color: #fff
    
  .sidebar__item
    color: #fff
</style>