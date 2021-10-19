<template>
  <v-section
    :title="'Experience'"
    :description="'My timeline of experience working in companies'"
  >
    <v-experience
      v-for="(experience, i) in experiences"
      :key="`experience${i}${uuid}`"
      :experience="experience"
    />
  </v-section>
</template>

<script lang="ts">
import Vue from 'vue'
import experiences from "~/assets/ts/experiences";
export default Vue.extend({
  data() {
    return {
      experiences
    }
  }
})
</script>
