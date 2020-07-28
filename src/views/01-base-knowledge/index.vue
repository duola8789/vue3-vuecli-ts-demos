<template>
  <div class="base-knowledge-container" ref="container">
    <h1 class="page-title">基础知识</h1>
    <div class="page-content">
      <div class="item1">
        <p :class="countClass">Now the Count is {{ state.count }}</p>
        <button @click="changeCount(true)" class="count-btn">+</button>
        <button @click="changeCount(false)" class="count-btn">-</button>
      </div>
      <div class="item1">
        <p>Now the Doubled Computed Number is {{ double }}</p>
      </div>
      <div class="item1">
        <button @click="goHome" class="route-btn">Go Home By Router</button>
      </div>
      <div class="item1">
        <p>Now the Count From Store is {{ storeState.count }}</p>
        <button @click="changeStoreCount(true)" class="count-btn">+</button>
        <button @click="changeStoreCount(false)" class="count-btn">-</button>
      </div>
    </div>
  </div>
</template>

<script>
import {reactive, ref, computed, watch, watchEffect, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

export default {
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive({
      count: 0
    });

    const storeState = store.state;

    let countClass = ref('odd');

    const double = computed(() => state.count * 2);

    const changeCount = (isAdd) => {
      isAdd ? state.count++ : state.count--;
    };

    const changeStoreCount = (isAdd) => {
      store.commit('changeCount', isAdd);
    };

    watch(
      () => state.count,
      (value) => {
        countClass.value = value % 2 ? 'even' : 'odd';
      }
    );

    const watcherStop = watch(double, (val) => {
      console.log('watching computed value', val, 'and it will stop once the computed number bigger than 10');
      if (val >= 10) {
        watcherStop();
      }
    });

    watchEffect(() => {
      console.log('watchEffect', state.count);
    });

    const container = ref(null);

    const goHome = () => router.push('/');

    onMounted(() => {
      console.log('mounted');
      console.log('dom', container.value);
    });

    return {state, double, countClass, container, storeState, changeCount, goHome, changeStoreCount};
  }
};
</script>

<style lang="scss" scoped>
.base-knowledge-container {
  .item1 {
    display: flex;
    margin: 20px 0;

    .count-btn {
      margin: 0 5px;
      background: none;
      border: 1px solid #999;
      padding: 0 20px;
      cursor: pointer;
    }

    .odd {
      color: #df1111;
      margin-right: 20px;
    }

    .even {
      color: #42b983;
      margin-right: 20px;
    }

    .route-btn {
      background: none;
      border: 1px solid #999;
      padding: 5px 20px;
      cursor: pointer;
    }
  }
}
</style>
