<template>
  <div>
    <el-button type="primary"><slot :message="message"></slot></el-button>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';

export default defineComponent({
  name: 'slot-child',
  setup() {
    const message = ref('Hello From Child');

    return {message};
  }
});
</script>
