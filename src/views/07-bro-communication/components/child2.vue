<template>
  <div class="page-content-child">
    <h1 class="page-title">Child2</h1>
    <div class="page-content">
      <div class="page-content-item">
        <span class="item-label">Child 1 Says:</span>
        <label><input :value="message" disabled /></label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
import {emitter} from '@/utils';

export default defineComponent({
  name: 'BroChild2',
  setup() {
    const message = ref('');

    emitter.on('to-child2', (e) => (message.value = e));

    return {message};
  }
});
</script>

<style lang="scss" scoped>
.page-content-child {
  @include page-base-style();
}
</style>
