<template>
  <div class="prop-container">
    <h1 class="page-title">组件传参</h1>
    <div class="page-content">
      <div class="page-content-item">
        <p class="message">The prop transferred to Child is {{ count }}</p>
        <child :msg="count" @update-count="updateCount" />
      </div>
    </div>
  </div>
</template>

<script>
import Child from './components/PropChild';

import {ref} from 'vue';

export default {
  name: 'Prop',
  components: {Child},
  setup() {
    let count = ref(0);

    const updateCount = (val) => (count.value += val);

    return {count, updateCount};
  },

  onRenderTracked(e) {
    debugger;
    // 检查哪个依赖性导致组件重新渲染
  },

  onRenderTriggered(e) {
    debugger;
    // 检查哪个依赖性导致组件重新渲染
  }
};
</script>

<style lang="scss" scoped>
.prop-container {
  .page-content-item {
    display: block;

    .message {
      margin-bottom: 20px;
    }
  }
}
</style>
