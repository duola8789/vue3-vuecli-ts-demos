<template>
  <ul class="menu-container">
    <li v-for="(menu, index) in menus" :key="menu.path + index" class="menu-item">
      <router-link :to="menu.path">{{ menu.meta.label }}</router-link>
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

<style scoped lang="scss">
.menu-container {
  font-size: 16px;
  padding-top: 50px;

  .menu-item {
    text-align: left;
    padding-left: 40px;
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
