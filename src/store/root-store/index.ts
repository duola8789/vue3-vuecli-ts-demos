/**
 * 在 index 中定义 store 的具体实现
 * 在 interface-types 定义 store 中相关实现的 TypeScript 类型接口
 * 在 store-types 定义 store 中使用的 Mutation/Action Type 常量
 */
import {RootState, RootGetters, RootMutations, RootActions} from './interface-types';
import {CHANGE_COUNT_ACT, CHANGE_COUNT_MUT} from './store-types';

const mock = (val: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000, val);
  });

const state: RootState = {
  count: 0
};

const getters: RootGetters = {
  doubleCount(state) {
    return state.count * 2;
  }
};

const mutations: RootMutations = {
  [CHANGE_COUNT_MUT](state, newVal) {
    state.count = newVal;
  }
};

const actions: RootActions = {
  // 获取用户权限（项目中包含虚拟项目）
  async [CHANGE_COUNT_ACT]({commit}, {newVal}) {
    const num = await mock(newVal);
    commit(CHANGE_COUNT_MUT, num);
  }
};

export default {state, getters, mutations, actions};
