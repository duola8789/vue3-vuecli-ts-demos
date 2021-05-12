<template>
  <label>
    请输入：
    <input :value="modelValue" @input="onInput" />
  </label>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'v-model-child',
  props: {
    modelValue: String,
    modelModifiers: {
      default: () => ({
        capitalize: true
      })
    }
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const capitalize = (val: string) => val.charAt(0).toUpperCase() + val.slice(1);
    const isCapitalize = props.modelModifiers && props.modelModifiers.capitalize;

    const onInput = (e: {target: HTMLInputElement}) => {
      const originValue = e.target.value;
      const value = isCapitalize ? capitalize(originValue) : originValue;
      emit('update:modelValue', value);
    };

    return {
      onInput
    };
  }
});
</script>
