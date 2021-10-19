<template>
  <article class="v-project">
    <v-picture :src="project.image" />

    <header>
      <h3>
        <a :href="project.link" target="_blank" rel="noopener noreferrer">
          {{ project.name }}
        </a>
      </h3>
      <p>{{ project.description }}</p>
    </header>

    <footer>
      <ul>
        <v-technology
          v-for="(technology, i) in [...project.frameworks, ...project.technologies]"
          :key="`technology${i}${uuid}`"
          :technology="technology"
        />
      </ul>
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
.v-project {
  display: grid;
  gap: 6px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #eee;
  box-shadow: 0 1px 3px 0 #ddd;
  > .v-picture {
    height: 240px;
  }
  > header, footer {
    padding: 0 15px;
  }
  > header {
    display: grid;
    gap: 4px 0;
    padding-top: 4px;
    h3 {
      font-size: 21px;
      a {
        font-size: 19px;
        &:hover {
          color: $blue;
        }
      }
    }
    p {
      font-size: 15px;
      font-weight: 400;
      color: rgb(150, 150, 150);
    }
  }
  > footer {
    margin-top: 15px;
    padding-bottom: 12px;
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }
  }
}
</style>
