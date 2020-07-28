import Vuex from 'vuex';

export default Vuex.createStore({
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
