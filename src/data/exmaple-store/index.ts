import {reactive, readonly} from 'vue';
import {ExampleActions, ExampleStates} from './types';
import {mock} from '@/utils';

const createStore = () =>
  reactive<ExampleStates>({
    count: 0
  });

const createAction = (state: ExampleStates): ExampleActions => ({
  async changeCountAct({newVal}) {
    state.count = await mock(newVal);
  }
});

const state = createStore();
const action = createAction(state);

export const useExampleStore = () => ({
  state: readonly(state),
  dispatch: readonly(action)
});
