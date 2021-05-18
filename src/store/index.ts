import {InjectionKey} from 'vue';
import {createStore, Store, useStore as originUseStore} from 'vuex';

import RootStore from './root-store';
import StoreModules from './modules';
import {RootState} from './root-store/interface-types';
import {AllStateTypes} from './types';

export const storeKey: InjectionKey<Store<AllStateTypes>> = Symbol();

export const store = createStore<RootState>({
  strict: process.env.NODE_ENV !== 'production',
  state: RootStore.state,
  getters: RootStore.getters,
  mutations: RootStore.mutations,
  actions: RootStore.actions,
  modules: StoreModules
});

export function useStore() {
  return originUseStore(storeKey);
}
