import {customRef} from 'vue';
import mitt from 'mitt';

export const useDebouncedRef = (value, isInputting, delay = 200) => {
  let timer;
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
        timer = setTimeout(() => {
          value = newValue;
          isInputting.value = false;
          trigger();
        }, delay);
      }
    };
  });
};

export const emitter = mitt();
