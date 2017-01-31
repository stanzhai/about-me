<template>
  <div class="view">
    <section>
      <section-text>
        <dt slot="title">Test</dt>
        <dd slot="desc">Fill</dd>
      </section-text>
    </section>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'About')
    },

    preFetch () {
      return {
        title: 'FAQ',
        meta: {}
      }
    }
  }
</script>