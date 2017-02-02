<template>
  <div class="view">
    <section>
      <section-header>About</section-header>
      <v-container fluid>
        <v-row>
          <v-col xs12 sm12 md12 lg6>
            <v-list three-line>
              <v-list-item class="my-3">
                <v-list-tile tag="div">
                  <v-list-tile-avatar>
                    <v-icon class="primary white--text">widgets</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Test</v-list-tile-title>
                    <v-list-tile-sub-title>test</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
      </v-container>
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