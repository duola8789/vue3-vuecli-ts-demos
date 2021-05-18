/**
 * 在 index 中定义 store 的具体实现
 * 在 interface-types 定义 store 中相关实现的 TypeScript 类型接口
 * 在 store-types 定义 store 中使用的 Mutation/Action Type 常量
 */
import {ExampleState, ExampleGetters, ExampleMutations, ExampleActions} from './interface-types';
import {CHANGE_EXAMPLE_COUNT_MUT, CHANGE_EXAMPLE_COUNT_ACT} from './store-types';

const mock = (val: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000, val);
  });

const state: ExampleState = {
  count: 0
};

const getters: ExampleGetters = {
  doubleCount(state) {
    return state.count * 2;
  }
};

const mutations: ExampleMutations = {
  [CHANGE_EXAMPLE_COUNT_MUT](state, newVal) {
    state.count = newVal;
  }
};

const actions: ExampleActions = {
  async [CHANGE_EXAMPLE_COUNT_ACT]({commit}, {newVal}) {
    const num = await mock(newVal);
    commit(CHANGE_EXAMPLE_COUNT_MUT, num);
  }
};

export default {namespaced: true, state, getters, mutations, actions};
