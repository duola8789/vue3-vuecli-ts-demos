<template>
  <div class="prop-child-container">
    <h2>子组件</h2>
    <div class="page-content">
      <div class="page-content-item">Prop from Parent is: {{ msg }}</div>
      <button @click="changeProp" class="btn">Change Prop By Emit Event</button>
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
    console.log(props.msg);

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
    padding: 5px 10px;
    cursor: pointer;
  }
}
</style>
