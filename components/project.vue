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
      <ul class="frameworks">
        <li class="framework"
          v-for="({ image, name }, i) in [...project.frameworks, ...project.technologies]"
          :key="`framework${i}${uuid}`"
        >
          <img :src="image" :alt="name">
          {{ name }}
        </li>
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
      li {
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
    }
  }
}
</style>
