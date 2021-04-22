import {customRef} from 'vue';
import mitt from 'mitt';

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

export const emitter = mitt();
