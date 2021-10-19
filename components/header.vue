<template>
  <header class="v-header">
    <v-button class="center btn-name">
      ELPANDEV
    </v-button>

    <nav>
      <nuxt-link to="/experience">Experience</nuxt-link>
      <nuxt-link to="/projects">Projects</nuxt-link>
      <nuxt-link to="/clones">Clones</nuxt-link>
    </nav>

    <v-button class="btn-action">Let's talk</v-button>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>

<style lang="scss">
.v-header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 0 24px;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 3px 0 #ccc;
  padding: 12px;
  background-color: white;
  z-index: 1;
  > .v-button {
    &.btn-name {
      display: none;
      font-size: 24px;
      color: $blue;
    }
    &.btn-action {
      border-radius: 8px;
      padding: 4px 12px;
      color: white;
      background-color: $blue;
      white-space: nowrap;
    }
  }
  nav {
    display: flex;
    align-items: center;
    gap: 0 8px;
    a {
      position: relative;
      transition: .1s;
      font-size: 13px;
      text-transform: uppercase;
      &:before {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        content: '';
        width: 0;
        height: 2px;
        transition: .4s;
        bottom: -18px;
      }
      &:hover, &.nuxt-link-active {
        color: $blue;
      }
      &.nuxt-link-active {
        &::before {
          width: 100%;
          background-color: $blue;
        }
      }
    }
  }
  @media screen and (min-width: $w480) {
    padding: 12px 18px;
    nav {
      gap: 0 36px;
    }
  }
  @media screen and (min-width: $w640) {
    grid-template-columns: auto 1fr auto;
    gap: 0 24px;
    > .v-button {
      &.btn-name {
        display: grid;
      }
    }
    nav {
      gap: 0 24px;
      a {
        font-size: 14px;
        padding: 4px 8px;
      }
    }
  }
  @media screen and (min-width: $w960) {
    padding: 12px 12vw;
  }
  @media screen and (min-width: $w1156) {
    gap: 0 56px;
  }
}
</style>
