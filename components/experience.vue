<template>
  <article class="v-experience">
    <span class="marker"></span>

    <header>
      <h3><b>{{ experience.company }}</b> / {{ experience.role }}</h3>
      <small>{{ experience.from }} - {{ experience.to }}</small>
      <p>{{ experience.description }}</p>
    </header>

    <div class="body">
      <h4>Tasks</h4>
      <ul class="tasks">
        <li class="task"
          v-for="(task, i) in experience.tasks"
          :key="`task${i}${uuid}`"
        >
          {{ task }}
        </li>
      </ul>
    </div>

    <footer>
      <ul>
        <v-technology
          v-for="(technology, i) in [...experience.frameworks, ...experience.technologies]"
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
    experience: Object as () => interface_experience
  }
})
</script>

<style lang="scss">
.v-experience {
  display: grid;
  gap: 24px 0;
  position: relative;
  padding: 24px 24px 24px 48px;
  border-width: 2px 2px 2px 2px;
  border-color: transparent transparent transparent rgba($blue, $alpha: 0.24);
  border-style: solid;
  border-radius: 0 24px 24px 0;
  .marker {
    position: absolute;
    top: 37px;
    left: -1px;
    transform: translate(-50%, -50%);
    background-color: $blue;
    @include size(12px);
    border-radius: 100%;
  }
  > header {
    display: grid;
    gap: 4px 0;
    h3 {
      font-size: 18px;
      font-weight: 400;
      b {
        font-size: 18px;
      }
    }
    small {
      font-size: 12px;
      color: #aaa;
    }
    p {
      margin-top: 4px;
    }
  }
  > .body {
    h4 {
      font-size: 14px;
    }
    .tasks {
      display: grid;
      padding: 0 0 0 12px;
      .task {
        font-size: 14px;
        &::before {
          content: '-';
        }
      }
    }
  }
  > footer {
    ul {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }
  }
  &:hover {
    background-color: rgba($blue, $alpha: 0.06);
      border-color: rgba($blue, $alpha: 0.24);
  }
}
</style>
