<template>
  <div class="home-container">
    <div>
      <img src="@/assets/logo.png" alt="logo" />
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'Vue3 Learning Demos'
    };
  }
};
</script>

<style lang="scss" scoped>
.home-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
