<template>
  <div class="page-content-child">
    <h2 class="page-title">子组件</h2>
    <div class="page-content">
      <div class="page-content-item">Value from Parent By Inject is: {{ childValue }}</div>
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
.page-content-child {
  @include page-base-style();

  .btn {
    @include btn-base-style();
  }
}
</style>
