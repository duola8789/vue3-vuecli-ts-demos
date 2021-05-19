import {reactive, readonly} from 'vue';
import {RootStates, RootActions} from './types';
import {mock} from '@/utils';

const createStore = () =>
  reactive<RootStates>({
    count: 0
  });

const createAction = (state: RootStates): RootActions => ({
  async changeCountAct({newVal}) {
    state.count = await mock(newVal);
  }
});

const state = createStore();
const action = createAction(state);

export const useRootStore = () => ({
  state: readonly(state),
  dispatch: readonly(action)
});
