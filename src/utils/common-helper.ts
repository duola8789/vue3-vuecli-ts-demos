import {customRef} from 'vue';
import mitt from 'mitt';

export const mock = <T>(val: T): Promise<T> =>
  new Promise((resolve) => {
    setTimeout(resolve, 1000, val);
  });

export const useDebouncedRef = (value: any, isInputting: any, delay = 200) => {
  let timer: number | null = null;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue) {
        if (timer) {
          clearTimeout(timer);
        }
        isInputting.value = true;
        timer = window.setTimeout(() => {
          value = newValue;
          isInputting.value = false;
          trigger();
        }, delay);
      }
    };
  });
};

export const namespaceHelper = (prefix: string) => (name: string) => prefix + '/' + name;

export const emitter = mitt();
