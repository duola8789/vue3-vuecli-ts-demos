<template>
  <div class="prop-container">
    <h1 class="page-title">组件传参</h1>
    <div class="page-content">
      <div class="page-content-item">
        <div class="message">
          <p class="label">The prop msg transferred to Child is {{ count }}</p>
          <button @click="count -= 2" class="btn">Change Prop msg By Emit Event -2</button>
        </div>

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
      display: flex;
      margin-bottom: 20px;
    }

    .btn {
      background: none;
      border: 1px solid #333;
      padding: 2px 10px;
      cursor: pointer;
    }

    .label {
      padding: 2px 10px 2px 0;
    }
  }
}
</style>
