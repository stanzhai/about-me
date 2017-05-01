<template>
  <div class="view">
    <section>
      <section-header>About</section-header>
      <blockquote>
        Hi, I am Stan Zhai(翟士丹), like programming. Focus on big data technologies.
        </br>
        Work on Spark, Hadoop and it's ecosystem projects. I'm a contributor of Apache Spark.
        </br>
        </br>
        I publish my ideas and findings on my <a href="http://blog.stanzhai.site">blog</a>.
        </br>
        <a href="mailto:mail@stanzhai.site">Shot me a message</a> if you are intrested in working with me. 
      </blockquote>
    </section>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$emit('view', 'Stan Zhai')
    },

    preFetch () {
      return {
        title: 'FAQ',
        meta: {}
      }
    }
  }
</script>

<style lang="stylus">
blockquote
  margin: 45px auto 15px
</style>