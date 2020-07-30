<template>
  <div class="custom-ref-container">
    <h1 class="page-title">customRef 实现输入防抖</h1>
    <div class="page-content">
      <div class="page-content-item">
        <label class="input-container">
          Input your message:
          <input :value="value" @input="onInput" />
        </label>
        <p>The Message you input is: {{ isInputting ? '...' : result }}</p>
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
  .page-content-item {
    display: block;

    .input-container {
      display: block;
      margin-bottom: 20px;

      input {
        margin-left: 20px;
      }
    }
  }
}
</style>
