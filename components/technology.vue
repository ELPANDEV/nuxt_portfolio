<template>
  <li class="v-technology">
    <img :src="technology.image" :alt="technology.name">
    {{ technology.name }}
  </li>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    technology: Object as () => interface_technology|interface_framework
  }
})
</script>

<style lang="scss">
.v-technology {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 0 4px;
  align-items: center;
  border: 1px solid #ddd;
  padding: 4px 9px;
  font-size: 11px;
  border-radius: 6px;
  text-transform: uppercase;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>
