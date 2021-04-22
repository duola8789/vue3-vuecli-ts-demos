<template>
  <div class="bro-communication-container">
    <h1 class="page-title">兄弟组件使用 mitt 通信</h1>
    <div class="page-content">
      <div class="page-content-item">
        <child1 />
      </div>
      <div class="page-content-item">
        <child2 />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

import Child1 from './components/child1.vue';
import Child2 from './components/child2.vue';

export default defineComponent({
  name: 'BroCommunication',
  components: {Child1, Child2},
  setup() {}
});
</script>

<style lang="scss" scoped>
.bro-communication-container {
  @include page-base-style();
}
</style>
