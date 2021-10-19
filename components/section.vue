<template>
  <section class="v-section">
    <header>
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
    </header>
    <div class="body">
      <slot />
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    description: String,
  }
})
</script>

<style lang="scss">

</style>
