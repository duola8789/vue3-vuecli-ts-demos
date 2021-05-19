<template>
  <div class="vuex-container" ref="ele">
    <h1 class="page-title">Simple Store</h1>
    <div class="page-content">
      <div class="page-content-item">
        <p>Count in Root State is {{ rootCount }}</p>
        <div style="margin-left: 10px;">
          <el-button @click="changeRootCount(true)" class="el-icon-plus"></el-button>
          <el-button @click="changeRootCount(false)" class="el-icon-minus"></el-button>
        </div>
      </div>
    </div>
    <child />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import Child from './child.vue';

import {useStore} from '@/data';

export default defineComponent({
  name: 'Vuex',
  components: {Child},
  setup() {
    const store = useStore();

    const rootCount = computed(() => store.state.count);

    const changeRootCount = (isAdd: boolean) => {
      const newVal = isAdd ? store.state.count + 2 : store.state.count - 2;
      store.dispatch.changeCountAct({newVal});
    };

    return {rootCount, changeRootCount};
  }
});
</script>

<style lang="scss" scoped>
.vuex-container {
  @include page-base-style();
}
</style>
