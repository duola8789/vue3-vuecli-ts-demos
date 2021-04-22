import {createStore} from 'vuex';

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    changeCount(state, isAdd) {
      state.count = isAdd ? state.count + 1 : state.count - 1;
    }
  },
  actions: {},
  modules: {}
});
