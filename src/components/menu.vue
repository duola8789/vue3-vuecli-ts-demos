<template>
  <ul class="menu-container">
    <li v-for="(menu, index) in menus" :key="menu.path + index" class="menu-item">
      <router-link :to="menu.path">{{ menu.label }}</router-link>
    </li>
  </ul>
</template>

<script>
import menus from '@/router/config';

export default {
  name: 'Menu',
  data() {
    return {
      menus: menus
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-container {
  font-size: 16px;
  padding-top: 50px;

  .menu-item {
    text-align: left;
    padding-left: 50px;
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0;
    }

    .router-link-active {
      color: #42b983;
    }
  }
}
</style>
