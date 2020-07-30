<template>
  <div class="provide-inject-container">
    <h1 class="page-title">依赖注入</h1>
    <div class="page-content">
      <div class="page-content-item">
        <label class="message">
          The prop transferred to Child is
          <input :value="message" class="input" @input="changeMessage" />
        </label>

        <child />
      </div>
    </div>
  </div>
</template>

<script>
import {ref, provide} from 'vue';
import Child from './components/Child';
import provideSymbols from '@/views/03-provide-inject/provideSymbols';

export default {
  name: 'ProvideInject',
  components: {Child},
  setup() {
    const message = ref('Hello From Parent');
    provide(provideSymbols.msg, message);

    const changeMessage = (e) => (message.value = e.target.value);

    return {message, changeMessage};
  }
};
</script>

<style lang="scss" scoped>
.provide-inject-container {
  .page-content-item {
    display: block;

    .message {
      display: inline-block;
      margin-bottom: 20px;
    }

    .input {
      margin-left: 10px;
    }
  }
}
</style>
