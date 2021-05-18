<template>
  <div class="vuex-container" ref="ele">
    <h1 class="page-title">Vuex</h1>
    <div class="page-content">
      <div class="page-content-item">
        <p>Count in Root State is {{ rootCount }}</p>
        <div style="margin-left: 10px;">
          <el-button @click="changeRootCount(true)" class="el-icon-plus"></el-button>
          <el-button @click="changeRootCount(false)" class="el-icon-minus"></el-button>
        </div>
      </div>
      <div class="page-content-item">
        <p>Now the Doubled Computed Count is {{ rootDoubleCount }}</p>
      </div>
    </div>
    <child />
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import Child from './child.vue';

import {useStore} from '@/store';
import {CHANGE_COUNT_ACT} from '@/store/root-store/store-types';

export default defineComponent({
  name: 'Vuex',
  components: {Child},
  setup() {
    const store = useStore();

    const rootCount = computed(() => store.state.count);
    const rootDoubleCount = computed(() => store.getters.doubleCount);

    const changeRootCount = (isAdd: boolean) => {
      const newVal = isAdd ? store.state.count + 2 : store.state.count - 2;
      store.dispatch(CHANGE_COUNT_ACT, {newVal});
    };

    return {rootCount, rootDoubleCount, changeRootCount};
  }
});
</script>

<style lang="scss" scoped>
.vuex-container {
  @include page-base-style();
}
</style>
