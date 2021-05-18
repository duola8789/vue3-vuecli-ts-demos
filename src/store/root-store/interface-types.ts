import {MutationTree, GetterTree, ActionTree, ActionContext} from 'vuex';
import {CHANGE_COUNT_MUT, CHANGE_COUNT_ACT} from './store-types';

export interface RootState {
  count: number;
}

export interface RootGetters extends GetterTree<RootState, RootState> {
  doubleCount(state: RootState): number;
}

export interface RootMutations extends MutationTree<RootState> {
  [CHANGE_COUNT_MUT](state: RootState, newVal: number): void;
}

export interface RootActions extends ActionTree<RootState, RootState> {
  [CHANGE_COUNT_ACT](actionContext: ActionContext<RootState, RootState>, payload: {newVal: number}): Promise<void>;
}
