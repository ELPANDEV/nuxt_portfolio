<template>
  <div class="v-profile">
    <h1>Francisco Moncayo</h1>
    <strong>Nuxt/Vue Developer</strong>
    <p><b>Self-taught programmer since 2016</b>, more exactly on June 26, 2016, the day I registered my first video game on google play. I know and do well in various technologies but over time I have specialized in <b>Laravel (PHP)</b>, <b>Nuxt/Vue (TS)</b>, being the technology that I use each day.</p>
    <p>However, I also know about <b>GCP (Google Cloud Platform)</b> especially when I need hosting and managing the web applications of my freelance projects.</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
.v-profile {
  display: grid;
  gap: 6px 0;
  h1 {
    font-size: 24px;
  }
  strong {
    font-size: 14px;
    font-weight: 400;
  }
  p {
    margin-top: 9px;
  }
}
</style>
