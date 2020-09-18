<template>
  <div class="prop-container">
    <h1 class="page-title">组件传参</h1>
    <div class="page-content">
      <div class="page-content-item">
        <p class="item-label">The prop msg transferred to Child is {{ count }}</p>
        <button @click="count -= 2" class="btn">Change Prop msg By Emit Event -2</button>
      </div>
      <div class="page-content-item">
        <child :msg="count" @update-count="updateCount" />
      </div>
    </div>
  </div>
</template>

<script>
import Child from './components/prop-child';

import {ref} from 'vue';

export default {
  name: 'Prop',
  components: {Child},
  setup() {
    let count = ref(0);

    const updateCount = (val) => (count.value += val);

    return {count, updateCount};
  },

  onRenderTracked() {
    debugger;
    // 检查哪个依赖性导致组件重新渲染
  },

  onRenderTriggered() {
    debugger;
    // 检查哪个依赖性导致组件重新渲染
  }
};
</script>

<style lang="scss" scoped>
.prop-container {
  @include page-base-style();

  .page-content {
    .page-content-item {
      .btn {
        @include btn-base-style();
      }
    }
  }
}
</style>
