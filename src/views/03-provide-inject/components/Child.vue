<template>
  <div class="prop-child-container">
    <h2>子组件</h2>
    <div class="page-content">
      <p>Value from Parent By Inject is: {{ childValue }}</p>
    </div>
  </div>
</template>

<script>
import {ref, inject} from 'vue';
import provideSymbols from '@/views/03-provide-inject/provideSymbols';

export default {
  name: 'Child',
  setup() {
    const childValue = inject(provideSymbols.msg, ref('defaultValue'));

    return {childValue};
  }
};
</script>

<style lang="scss" scoped>
.prop-child-container {
  padding: 20px;
  border: 1px solid grey;

  .btn {
    background: none;
    border: 1px solid #333;
    padding: 5px 10px;
    cursor: pointer;

    .input {
      margin-left: 10px;
    }
  }
}
</style>
