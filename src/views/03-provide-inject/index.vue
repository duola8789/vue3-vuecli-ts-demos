<template>
  <div class="provide-inject-container">
    <h1 class="page-title">依赖注入</h1>
    <div class="page-content">
      <label class="page-content-item">
        <span class="item-label">The prop transferred to Child is:</span>
        <input :value="message" @input="changeMessage" />
      </label>
      <child />
    </div>
  </div>
</template>

<script lang="ts">
import {ref, provide, defineComponent} from 'vue';
import Child from './components/child.vue';
import provideSymbols from '@/views/03-provide-inject/provideSymbols';

export default defineComponent({
  name: 'ProvideInject',
  components: {Child},
  setup() {
    const message = ref('Hello From Parent');
    provide(provideSymbols.msg, message);

    const changeMessage = (e: Event) => (message.value = (e.target as HTMLInputElement).value);

    return {message, changeMessage};
  }
});
</script>

<style lang="scss" scoped>
.provide-inject-container {
  @include page-base-style();
}
</style>
