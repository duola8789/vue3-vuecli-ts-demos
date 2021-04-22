<template>
  <div class="base-knowledge-container" ref="ele">
    <h1 class="page-title">基础知识</h1>
    <div class="page-content">
      <div class="page-content-item">
        <p :class="countClass">Now the Count is {{ state.count }}</p>
        <button @click="changeCount(true)" class="count-btn">+</button>
        <button @click="changeCount(false)" class="count-btn">-</button>
      </div>
      <div class="page-content-item">
        <p>Now the Doubled Computed Count is {{ double }}</p>
      </div>
      <div class="page-content-item">
        <p>Now the Count from toRef is {{ toRefCount }}，and it will keep same value with Count</p>
        <button @click="toRefCount++" class="count-btn">+ ToRefCount</button>
        <button @click="toRefCount--" class="count-btn">- ToRefCount</button>
      </div>
      <div class="page-content-item">
        <button @click="goHome" class="route-btn">Go Home By Router</button>
      </div>
      <div class="page-content-item">
        <p>Now the Count From Store is {{ storeState.count }}</p>
        <button @click="changeStoreCount(true)" class="count-btn">+</button>
        <button @click="changeStoreCount(false)" class="count-btn">-</button>
      </div>
      <div class="page-content-item">
        <p>There is an Array： {{ state.arr }}</p>
        <button @click="changeArray" class="count-btn">Change Array By Index</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, ref, computed, watch, watchEffect, toRef, onMounted, defineComponent} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from 'vuex';

export default defineComponent({
  name: 'BaseKnowledge',
  setup() {
    const router = useRouter();
    const store = useStore();

    const state = reactive<{count: number; arr: number[]}>({
      count: 0,
      arr: [1, 2, 3]
    });

    const toRefCount = toRef(state, 'count');

    const storeState = store.state;

    let countClass = ref('odd');

    const double = computed(() => state.count * 2);

    const changeCount = (isAdd: boolean) => {
      isAdd ? state.count++ : state.count--;
    };

    const changeStoreCount = (isAdd: boolean) => {
      store.commit('changeCount', isAdd);
    };

    watch(
      () => state.count,
      (value, b, onInvalidate) => {
        countClass.value = value % 2 ? 'even' : 'odd';
        onInvalidate(() => {
          console.log(countClass.value, 'go to be changed');
        });
      }
    );

    const watcherStop = watch(double, (val) => {
      console.log('watching computed value', val, 'and it will stop once the computed number bigger than 10');
      if (val >= 10) {
        watcherStop();
      }
    });

    watchEffect(
      () => {
        console.log('watchEffect', state.count);
      },
      {
        flush: 'pre',
        onTrigger(e) {
          console.log('onTrigger', e);
        }
      }
    );

    const ele = ref(null);

    const goHome = () => router.push('/');

    onMounted(() => {
      console.log('mounted');
      console.log('dom', ele.value);
    });

    const changeArray = () => {
      state.arr[0] = 100;
    };

    return {state, double, countClass, ele, storeState, toRefCount, changeCount, goHome, changeStoreCount, changeArray};
  }
});
</script>

<style lang="scss" scoped>
.base-knowledge-container {
  @include page-base-style();

  .page-content-item {
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
