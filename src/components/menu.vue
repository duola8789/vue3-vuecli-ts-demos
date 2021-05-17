<template>
  <ul class="menu-container">
    <li v-for="(menu, index) in state.menus" :key="menu.path + index" class="menu-item">
      <p class="menu-item-link" :class="isActive(menu) ? 'router-link-active' : ''" @click="onClick(menu)">
        {{ menu.meta.label }}
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import menus from '@/router/config';
import {defineComponent, reactive} from 'vue';
import {RouteRecordRaw, useRoute, useRouter} from 'vue-router';

export default defineComponent({
  name: 'Menu',
  setup() {
    const state = reactive<{menus: RouteRecordRaw[]}>({menus: menus.filter((v) => !!v.meta)});
    const router = useRouter(),
      route = useRoute();

    const onClick = (menu: RouteRecordRaw) => {
      router.push(menu.path);
    };

    const isActive = (menu: RouteRecordRaw) => route.path === menu.path;

    return {state, onClick, isActive};
  }
});
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

    .menu-item-link {
      cursor: pointer;
      transition: all 0.1s linear;

      &:not(.router-link-active):hover {
        color: #409eff;
      }
    }
  }
}
</style>
