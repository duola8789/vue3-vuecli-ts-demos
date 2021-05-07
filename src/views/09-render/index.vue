<template>
  <div class="render-container">
    <h1 class="page-title">Render渲染函数</h1>
    <div class="page-content">
      <anchored-heading v-for="item in state.levels" :key="item" :level="item">
        <template v-slot="props">Hello Word -- {{ props.message }}</template>
      </anchored-heading>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, defineComponent} from 'vue';
import AnchoredHeading from './anchored-heading.vue';

export default defineComponent({
  name: 'render',
  components: {
    AnchoredHeading
  },
  setup() {
    const state = reactive<{levels: number[]}>({levels: [1, 2, 3, 4, 5]});

    return {state};
  }
});
</script>

<style lang="scss" scoped>
.render-container {
  @include page-base-style();
}
</style>
