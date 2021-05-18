import {MutationTree, GetterTree, ActionTree, ActionContext} from 'vuex';
import {CHANGE_EXAMPLE_COUNT_MUT, CHANGE_EXAMPLE_COUNT_ACT} from './store-types';

export interface ExampleState {
  count: number;
}

export interface ExampleGetters extends GetterTree<ExampleState, ExampleState> {
  doubleCount(state: ExampleState): number;
}

export interface ExampleMutations extends MutationTree<ExampleState> {
  [CHANGE_EXAMPLE_COUNT_MUT](state: ExampleState, newVal: number): void;
}

export interface ExampleActions extends ActionTree<ExampleState, ExampleState> {
  [CHANGE_EXAMPLE_COUNT_ACT](
    actionContext: ActionContext<ExampleState, ExampleState>,
    payload: {newVal: number}
  ): Promise<void>;
}
