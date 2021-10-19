<template>
  <div class="x-index">
    <v-profile />
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  mounted() {
    this.$router.push('/experience')
  }
})
</script>

<style lang="scss">
.x-index {
  display: grid;
  gap: 24px 0;
  align-content: baseline;
  padding: 18px 24px;
  max-width: $w768;
  width: 100%;
  margin: 0 auto;
  h1, h2, h3 {
    &::before {
      content: '#';
      color: $blue;
      margin-right: 9px;
      font-family: Roboto;
    }
  }
}
</style>
