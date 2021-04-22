<template>
  <div class="page-content-child">
    <h2 class="page-title">子组件</h2>
    <div class="page-content">
      <div class="page-content-item">
        <p class="label">Prop msg from Parent is: {{ msg }}</p>
        <button @click="changeProp" class="btn">Change Prop msg By Emit Event +2</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'PropChild',
  props: {
    msg: Number
  },
  setup(props, {emit}) {
    const changeProp = () => {
      emit('update-count', 2);
    };

    return {changeProp};
  }
});
</script>

<style lang="scss" scoped>
.page-content-child {
  @include page-base-style();

  .btn {
    @include btn-base-style();
  }

  .label {
    padding: 2px 10px 2px 0;
  }
}
</style>
