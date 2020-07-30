<template>
  <div class="prop-child-container">
    <h2>子组件</h2>
    <div class="page-content">
      <div class="page-content-item">
        <p class="label">Prop msg from Parent is: {{ msg }}</p>
        <button @click="changeProp" class="btn">Change Prop msg By Emit Event +2</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style lang="scss" scoped>
.prop-child-container {
  padding: 20px;
  border: 1px solid grey;

  .btn {
    background: none;
    border: 1px solid #333;
    padding: 2px 10px;
    cursor: pointer;
  }

  .label {
    padding: 2px 10px 2px 0;
  }
}
</style>
