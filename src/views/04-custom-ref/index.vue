<template>
  <div class="custom-ref-container">
    <h1 class="page-title">customRef 实现输入防抖</h1>
    <div class="page-content">
      <label class="page-content-item">
        <span class="item-label">Input your message:</span>
        <input :value="value" @input="onInput" />
      </label>
      <div class="page-content-item">
        <span class="item-label">The Message you input is:</span>
        <span>{{ isInputting ? '...' : result }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {useDebouncedRef} from '@/utils';

export default {
  name: 'CustomRef',
  setup() {
    const isInputting = ref(false);
    const value = ref('');
    const result = useDebouncedRef('', isInputting, 500);

    const onInput = (e) => {
      value.value = e.target.value;
      result.value = e.target.value;
    };

    return {value, result, isInputting, onInput};
  }
};
</script>

<style lang="scss" scoped>
.custom-ref-container {
  @include page-base-style();
}
</style>
