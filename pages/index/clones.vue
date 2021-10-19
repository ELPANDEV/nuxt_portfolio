<template>
  <v-section class="projects"
    :title="'Clones'"
    :description="'Famous website that I cloned to show my skills'"
  >
    <v-project
      v-for="(clone, i) in clones"
      :key="`clone${i}${uuid}`"
      :project="clone"
    />
  </v-section>
</template>

<script lang="ts">
import Vue from 'vue'
import clones from "~/assets/ts/clones";
export default Vue.extend({
  data() {
    return {
      clones
    }
  }
})
</script>
