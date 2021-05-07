<template>
  <div class="slot-container">
    <h1 class="page-title">插槽Slot</h1>
    <div class="page-content">
      <slot-child>
        <template v-slot="slotProps">{{ slotProps.message }} -- ok</template>
      </slot-child>
      <slot-child>
        <template v-slot:[state.slotName]="slotProps">{{ slotProps.message }} -- ok</template>
      </slot-child>
    </div>
  </div>
</template>

<script lang="ts">
import {reactive, defineComponent} from 'vue';
import SlotChild from './child.vue';

export default defineComponent({
  name: 'slot',
  components: {
    SlotChild
  },
  setup() {
    const state = reactive<{slotName: string}>({slotName: 'default'});

    return {state};
  }
});
</script>

<style lang="scss" scoped>
.slot-container {
  @include page-base-style();
}
</style>
