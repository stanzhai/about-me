<template>
  <div>
    <section>
      <section-text>
        <dt slot="title">Test2</dt>
        <dd slot="desc">Fill2</dd>
      </section-text>
    </section>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Test')
    },

    preFetch () {
      return {
        title: 'FAQ',
        meta: {}
      }
    }
  }
</script>