<template>
  <div class="app">
    <aside class="aside">
      <common-menu />
    </aside>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import CommonMenu from '@/components/menu.vue';

export default {
  name: 'Menu',
  components: {
    CommonMenu
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  appearance: none;
  text-shadow: none;
  outline: none;
  box-sizing: border-box;
  vertical-align: middle;
}

a {
  text-decoration: none;
  color: #808080;
}

input {
  background: none;
  border: 1px solid #999;
  padding: 5px;
  border-radius: 4px;
  color: #808080;

  &[type='checkbox'] {
    appearance: auto;
  }

  &:disabled {
    background: #e4e8f0;
    cursor: not-allowed;
  }
}

html,
body {
  width: 100%;
  height: 100%;
}

.app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #808080;
  display: flex;

  .aside {
    flex: 0 1 220px;
    overflow: auto;
    border-right: 1px solid #333;
  }

  .main {
    flex: 1;
    padding: 30px;
  }
}
</style>
