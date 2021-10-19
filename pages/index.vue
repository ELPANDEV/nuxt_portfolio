<template>
  <div class="x-index">
    <v-profile />

    <v-section
      :title="'Projects'"
      :description="'Systems that I created/participated while I was working in companies'"
    >
      <v-project
        v-for="(project, i) in projects"
        :key="`project${i}${uuid}`"
        :project="project"
      />
    </v-section>

    <v-section
      :title="'Clones'"
      :description="'Famous website that I cloned to show my skills'"
    >
      <v-project
        v-for="(clone, i) in clones"
        :key="`clone${i}${uuid}`"
        :project="clone"
      />
    </v-section>

    <v-section
      :title="'Experience'"
      :description="'My timeline of experience working in companies'"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import projects from "~/assets/ts/projects";
import clones from "~/assets/ts/clones";
export default Vue.extend({
  data() {
    return {
      projects,
      clones
    }
  }
})
</script>
