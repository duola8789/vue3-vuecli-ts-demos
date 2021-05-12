<template>
  <div class="slot-container">
    <h1 class="page-title">自定义v-model修饰符</h1>
    <div class="page-content">
      capitalize
      <v-model-child v-model.capitalize.test="msg" />
      <div style="margin-top: 10px;">父组件中的数据：{{ msg }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
import VModelChild from './child.vue';

export default defineComponent({
  name: 'model-modifiers',
  components: {
    VModelChild
  },
  setup() {
    const msg = ref('');

    return {msg};
  }
});
</script>

<style lang="scss" scoped>
.slot-container {
  @include page-base-style();
}
</style>
