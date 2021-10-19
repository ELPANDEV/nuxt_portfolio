<template>
  <button class="v-button">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
.v-button {
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  &.center {
    display: grid;
    place-items: center;
  }
}
</style>
