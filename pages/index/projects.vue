<template>
  <v-section class="projects"
    :title="'Projects'"
    :description="'Systems that I created/participated while I was working in companies'"
  >
    <v-project
      v-for="(project, i) in projects"
      :key="`project${i}${uuid}`"
      :project="project"
    />
  </v-section>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from "~/assets/ts/projects";
export default Vue.extend({
  data() {
    return {
      projects,
    }
  }
})
</script>
