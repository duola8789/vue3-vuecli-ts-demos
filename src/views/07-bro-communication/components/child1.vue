<template>
  <div class="page-content-child">
    <h1 class="page-title">Child1</h1>
    <div class="page-content">
      <div class="page-content-item">
        <span class="item-label">I am saying:</span>
        <label><input :value="message" @input="onInput" /></label>
      </div>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import {emitter} from '@/utils';

export default {
  name: 'BroChild1',
  setup() {
    const message = ref('');

    const onInput = (e) => {
      message.value = e.target.value;
      emitter.emit('to-child2', message.value);
    };
    return {message, onInput};
  }
};
</script>

<style lang="scss" scoped>
.page-content-child {
  @include page-base-style();
}
</style>
