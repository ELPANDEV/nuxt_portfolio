<template>
  <article class="v-project">
    <v-picture :src="project.image" />

    <header>
      <h3>{{ project.name }}</h3>
      <p>{{ project.description }}</p>
    </header>

    <footer>
      <div class="list-container">
        <h4>Frameworks</h4>
        <ul class="frameworks">
          <li class="framework"
            v-for="({ image, name }, i) in project.frameworks"
            :key="`framework${i}${uuid}`"
          >
            <img :src="image" alt="">
            {{ name }}
          </li>
        </ul>
      </div>

      <div class="list-container">
        <h4>Technologies</h4>
        <ul class="technologies">
          <li class="framework"
            v-for="({ image, name }, i) in project.technologies"
            :key="`framework${i}${uuid}`"
          >
            <img :src="image" alt="">
            {{ name }}
          </li>
        </ul>
      </div>
    </footer>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    project: Object as () => interface_project
  },
})
</script>

<style lang="scss">

</style>
