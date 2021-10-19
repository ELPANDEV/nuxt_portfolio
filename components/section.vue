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
.v-section {
  display: grid;
  gap: 24px 0;
  > header {
    h2 {
      font-size: 19px;
      text-transform: uppercase;
    }
  }
  &.projects {
    > .body {
      display: grid;
      gap: 24px;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
  }
}
</style>
