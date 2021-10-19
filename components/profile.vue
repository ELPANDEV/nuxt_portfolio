<template>
  <div class="v-profile">
    <h1>Francisco Moncayo</h1>
    <strong>Nuxt/Vue Developer</strong>
    <p>Programador autodidacta desde el 2016, más exactamente el 26 de junio del 2016, día en el que registro mi primer videojuego en google play.</p>
    <p>Conozco y me desenvuelvo bien en varias tecnologías pero con el tiempo me he especializado en Laravel (PHP), Vue/Nuxt (TS) y Flutter (Dart), siendo Laravel y Vue las tecnologías con las que más trabajo en mi día a día.</p>
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
