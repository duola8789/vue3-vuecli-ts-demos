import {useRootStore} from './root-store';
import {useExampleStore} from './exmaple-store';

const allStore = {
  root: useRootStore(),
  example: useExampleStore()
};

export const useStore = (storeName: keyof typeof allStore = 'root') => allStore[storeName];
