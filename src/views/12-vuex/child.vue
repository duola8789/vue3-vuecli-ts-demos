<template>
  <el-card class="vuex-child-container" ref="ele">
    <div class="page-content-item">
      <p>Count in Example State is {{ exampleCount }}</p>
      <div style="margin-left: 10px;">
        <el-button @click="changeChildCount(true)" class="el-icon-plus"></el-button>
        <el-button @click="changeChildCount(false)" class="el-icon-minus"></el-button>
      </div>
    </div>
    <div class="page-content-item">
      <p>Now the Doubled Computed Count is {{ exampleDoubleCount }}</p>
    </div>
  </el-card>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import {useStore} from '@/store';

import {namespaceHelper} from '@/utils';
import {CHANGE_EXAMPLE_COUNT_ACT} from '@/store/modules/example/store-types';

const namespace = namespaceHelper('example');

export default defineComponent({
  name: 'Vuex-Child',
  setup() {
    const store = useStore();

    const exampleCount = computed(() => store.state.example.count);
    const exampleDoubleCount = computed(() => store.getters[namespace('doubleCount')]);

    const changeChildCount = (isAdd: boolean) => {
      const newVal = isAdd ? store.state.count + 2 : store.state.count - 2;
      store.dispatch(namespace(CHANGE_EXAMPLE_COUNT_ACT), {newVal});
    };

    return {exampleCount, exampleDoubleCount, changeChildCount};
  }
});
</script>

<style lang="scss" scoped>
.vuex-child-container {
  @include page-base-style();

  margin-top: 16px;

  .page-content-item:first-child {
    margin-top: 0;
  }
}
</style>
